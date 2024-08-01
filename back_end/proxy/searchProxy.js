// proxy/searchProxy.js
const prisma = require('../prisma/client');
const LRU = require('lru-cache');

class SearchProxy {
  constructor(maxSize = 100) {
    this.cache = new LRU({ // LRU == (Least Recently Used)
      max: maxSize,
      length: (n, key) => 1,
      dispose: (key, value) => console.log(`Cache item ${key} disposed`),
      maxAge: 1000 * 60 * 60
    });
  }

  async search(query, limit, skip) {
    const cacheKey = `${query}-${limit}-${skip}`;
    if (this.cache.has(cacheKey)) {
      console.log('Returning cached result');
      return this.cache.get(cacheKey);
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
      this.cache.set(cacheKey, result);
      return result;
    } catch (err) {
      throw new Error('Error fetching data');
    }
  }
}

module.exports = SearchProxy;
