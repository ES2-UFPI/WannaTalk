const prisma = require('../prismaClient');

class SearchProxy {
  constructor() {
    this.cache = {};
  }

  async search(query, limit, skip) {
    const cacheKey = `${query}-${limit}-${skip}`;
    if (this.cache[cacheKey]) {
      console.log('Returning cached result');
      return this.cache[cacheKey];
    }

    try {
      const [users, roteiros, contextos, idiomas] = await Promise.all([
        prisma.user.findMany({
          where: {
            username: {
              contains: query,
              mode: 'insensitive',
            },
          },
          select: {
            name: true,
            username: true,
          },
          take: parseInt(limit),
          skip: parseInt(skip),
        }),
        prisma.script.findMany({
          where: {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          select: {
            title: true,
            description: true,
          },
          take: parseInt(limit),
          skip: parseInt(skip),
        }),
        prisma.context.findMany({
          where: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          select: {
            name: true,
            code: true,
          },
          take: parseInt(limit),
          skip: parseInt(skip),
        }),
        prisma.language.findMany({
          where: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          select: {
            name: true,
            code: true,
          },
          take: parseInt(limit),
          skip: parseInt(skip),
        })
      ]);

      const result = { users, roteiros, contextos, idiomas };
      this.cache[cacheKey] = result;
      return result;
    } catch (err) {
      throw new Error('Error fetching data');
    }
  }
}

module.exports = SearchProxy;
