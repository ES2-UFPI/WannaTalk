const express = require("express");
const router = express.Router();
const prisma = require("../prisma/client");

// Middleware de tratamento de erros
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Rota para renderizar a configuração do chat
router.get(
  "/:hashcode/chatconfig",
  asyncHandler(async (req, res) => {
    const { hashcode } = req.params;

    const user = await prisma.user.findFirst({ where: { hashcode } });

    if (!user) {
      console.log(`404\nError: User with hashcode ${hashcode} not found`);
      return res.redirect("/admin/userlist");
    }

    const [context_list, language_list, agent_list] = await Promise.all([
      prisma.context.findMany(),
      prisma.language.findMany(),
      prisma.agent.findMany(),
    ]);

    res.render("user/chatconfig", {
      agents: agent_list,
      languages: language_list,
      contexts: context_list,
    });
  })
);

// Rota para acessar o chat
router.get(
  "/:hashcode/chat",
  asyncHandler(async (req, res) => {
    const { hashcode } = req.params;

    const user = await prisma.user.findFirst({ where: { hashcode } });

    if (!user) {
      console.log(`404\nError: User with hashcode ${hashcode} not found`);
      return res.redirect("/admin/userlist");
    }

    res.json(user);
    // res.render("/target") // Renderizar a tela do chat
  })
);

// Rota para pesquisar
const cache = new Map();
const CACHE_LIMIT = 100;
const CACHE_TTL = 10 * 60 * 1000;

router.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  const limit = 10;
  const page = 1;
  const skip = (page - 1) * limit;

  if (!query) {
    return res.status(400).send({ error: "Query parameter is required" });
  }

  const cacheKey = `${query}-${page}-${limit}`;
  const now = Date.now();

  // Verifica se o resultado está em cache e se ainda é válido
  if (cache.has(cacheKey) && now - cache.get(cacheKey).timestamp < CACHE_TTL) {
    return res.json(cache.get(cacheKey).data);
  }

  try {
    const roteiros = await prisma.script.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      select: {
        title: true,
        description: true,
      },
      take: parseInt(limit),
      skip: parseInt(skip),
    });

    const responseData = { roteiros };

    cache.set(cacheKey, { timestamp: now, data: responseData });

    if (cache.size > CACHE_LIMIT) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    res.json(responseData);
  } catch (err) {
    console.error("Error fetching scripts:", err);
    res.status(500).send({ error: "An error occurred while fetching scripts" });
  }
});

class Roteiro {
  constructor(
    title,
    summary,
    difficultyId,
    generoId,
    idiomasId,
    notes = "",
    refs = ""
  ) {
    this.title = title;
    this.summary = summary;
    this.difficultyId = difficultyId;
    this.generoId = generoId;
    this.idiomasId = idiomasId;
    this.notes = notes;
    this.refs = refs;
  }

  clone() {
    return new Roteiro(
      this.title,
      this.summary,
      this.difficultyId,
      this.generoId,
      this.idiomasId,
      this.notes,
      this.refs
    );
  }
}

router.post(
  "/criarRoteiro",
  asyncHandler(async (req, res) => {
    const { resumo, dificuldade, idiomas, genero, notas, referencias, title } =
      req.body;

    if (!title || !resumo || !dificuldade || !genero || !idiomas) {
      return res
        .status(400)
        .send({ error: "Campos obrigatórios estão faltando" });
    }

    const dificuldadeId = parseInt(dificuldade, 10);
    const generoId = parseInt(genero, 10);
    const idiomasId = parseInt(idiomas, 10);

    if (isNaN(dificuldadeId) || isNaN(generoId) || isNaN(idiomasId)) {
      return res.status(400).send({ error: "IDs inválidos" });
    }

    const prototipoRoteiro = new Roteiro(
      title,
      resumo,
      dificuldadeId,
      generoId,
      idiomasId,
      notas,
      referencias
    );

    try {
      const novoRoteiro = await prisma.script.create({
        data: {
          title: prototipoRoteiro.title,
          summary: prototipoRoteiro.summary,
          difficulty: { connect: { id: prototipoRoteiro.difficultyId } },
          gender: { connect: { id: prototipoRoteiro.generoId } },
          language: { connect: { id: prototipoRoteiro.idiomasId } },
          notes: prototipoRoteiro.notes,
          refs: prototipoRoteiro.refs,
        },
      });

      console.log("ROTEIRO CRIADO");
      res.status(201).json(novoRoteiro);
    } catch (err) {
      console.error("Erro ao criar roteiro:", err);
      res.status(500).send({ error: "Erro ao criar roteiro" });
    }
  })
);

module.exports = router;
