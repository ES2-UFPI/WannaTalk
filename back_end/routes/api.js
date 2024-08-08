const express = require("express");
const router = express.Router();
const prisma = require("../prisma/client");

const { parseDialogues } = require("..//helpers/helpers"); // Importa a função do arquivo helpers

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get(
  "/scripts/find/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const scriptId = parseInt(id, 10);
    const script = await prisma.script.findUnique({
      where: { id: scriptId },
    });

    if (script) {
      res.json(script);
    } else {
      res.status(404).json({ message: "Script não encontrado" }); // Retorna 404 se não encontrado
    }
  })
);

router.post(
  "/scripts/update/dialogue/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { dialogues } = req.body;
    const scriptId = parseInt(id, 10); // Converte o id para um número inteiro

    if (!dialogues) {
      return res
        .status(400)
        .json({ message: "Diálogos inválidos ou ausentes." });
    }

    try {
      const updatedScript = await prisma.script.update({
        where: { id: scriptId },
        data: { dialogues },
      });

      res.json(updatedScript); // Retorna o script atualizado
    } catch (error) {
      console.error("Error updating script:", error);
      res.status(500).json({ message: "Erro ao atualizar o script." }); // Retorna um erro interno se algo der errado
    }
  })
);

router.get(
  "/getdifficulties",
  asyncHandler(async (req, res) => {
    const dificuldades = await prisma.difficulty.findMany();
    res.json(dificuldades);
  })
);

router.get(
  "/getlanguages",
  asyncHandler(async (req, res) => {
    const idiomas = await prisma.language.findMany();
    res.json(idiomas);
  })
);

router.post("/saveCharacters", async (req, res) => {
  const { id, personagens } = req.body;

  if (!id || !personagens) {
    return res
      .status(400)
      .json({ message: "ID e personagens são obrigatórios." });
  }

  try {
    const updatedScript = await prisma.script.update({
      where: { id: parseInt(id, 10) },
      data: { personagens },
    });

    res
      .status(200)
      .json({ message: "Personagens atualizados com sucesso!", updatedScript });
  } catch (error) {
    console.error("Erro ao atualizar personagens:", error);
    res.status(500).json({ message: "Erro ao atualizar personagens." });
  }
});

router.get("/getVoices", async (req, res) => {
  try {
    console.log("entrou");
    // Obtém todos os agentes
    const agents = await prisma.agent.findMany({
      select: {
        voice: true, // Apenas seleciona o campo 'voice'
      },
    });

    // Extrai os nomes das vozes
    const voices = agents.map((agent) => agent.voice);

    // Retorna a lista de vozes
    res.status(200).json(voices);
  } catch (error) {
    console.error("Erro ao obter vozes:", error);
    res.status(500).json({ message: "Erro ao obter vozes." });
  }
});

router.get(
  "/getgenders",
  asyncHandler(async (req, res) => {
    const generos = await prisma.gender.findMany();
    res.json(generos);
  })
);

router.post(
  "/createLanguage",
  asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "O nome do idioma é obrigatório" });
    }

    const newLanguage = await prisma.language.create({
      data: { name },
    });

    res.status(201).json(newLanguage);
  })
);

router.post(
  "/createGender",
  asyncHandler(async (req, res) => {
    const { name, image } = req.body;

    if (!name || !image) {
      return res.status(400).json({ error: "O nome do gênero é obrigatório" });
    }

    const newGenre = await prisma.gender.create({
      data: { name: name, image: image },
    });

    res.status(201).json(newGenre);
  })
);

router.post(
  "/createDifficulty",
  asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ error: "O nome do nível de dificuldade é obrigatório" });
    }

    const newDifficulty = await prisma.difficulty.create({
      data: { name },
    });

    res.status(201).json(newDifficulty);
  })
);

router.get(
  "/scripts/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const script = await prisma.script.findUnique({
        where: { id: parseInt(id, 10) },
      });
      if (!script) {
        return res.status(404).send({ error: "Script não encontrado" });
      }

      const dialoguesList = parseDialogues(script.dialogues || "");

      res.json({
        ...script,
        dialoguesList,
      });
    } catch (err) {
      console.error("Erro ao buscar script:", err);
      res.status(500).send({ error: "Erro ao buscar script" });
    }
  })
);

router.get(
  "/scripts",
  asyncHandler(async (req, res) => {
    try {
      const scripts = await prisma.script.findMany();
      if (scripts.length === 0) {
        return res.json([]);
      }

      res.json(scripts);
    } catch (err) {
      console.error("Erro ao buscar scripts:", err);
      res.status(500).json({ error: "Erro ao buscar scripts" });
    }
  })
);

module.exports = router;
