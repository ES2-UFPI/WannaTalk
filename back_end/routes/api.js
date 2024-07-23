const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');

const { parseDialogues } = require('..//helpers/helpers'); // Importa a função do arquivo helpers

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.get('/getdifficulties', asyncHandler(async (req, res) => {
    const dificuldades = await prisma.difficulty.findMany();
    res.json(dificuldades);
}));

router.get('/getlanguages', asyncHandler(async (req, res) => {
    const idiomas = await prisma.language.findMany();
    res.json(idiomas);
}));

router.get('/getgenders', asyncHandler(async (req, res) => {
    const generos = await prisma.gender.findMany();
    res.json(generos);
}));

router.post('/createLanguage', asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'O nome do idioma é obrigatório' });
    }

    const newLanguage = await prisma.language.create({
        data: { name },
    });

    res.status(201).json(newLanguage);
}));


router.post('/createGender', asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'O nome do gênero é obrigatório' });
    }

    const newGenre = await prisma.gender.create({
        data: { name },
    });

    res.status(201).json(newGenre);
}));


router.post('/createDifficulty', asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'O nome do nível de dificuldade é obrigatório' });
    }

    const newDifficulty = await prisma.difficulty.create({
        data: { name },
    });

    res.status(201).json(newDifficulty);
}));

router.get('/scripts/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const script = await prisma.script.findUnique({
            where: { id: parseInt(id, 10) }
        });
        if (!script) {
            return res.status(404).send({ error: 'Script não encontrado' });
        }

        const dialoguesList = parseDialogues(script.dialogues || '');

        res.json({
            ...script,
            dialoguesList,
        });
    } catch (err) {
        console.error('Erro ao buscar script:', err);
        res.status(500).send({ error: 'Erro ao buscar script' });
    }
}));

router.get('/scripts', asyncHandler(async (req, res) => {
    try {
        const scripts = await prisma.script.findMany();
        const dificuldades = await prisma.difficulty.findMany();
        const idiomas = await prisma.language.findMany();
        const generos = await prisma.gender.findMany();

        console.log(scripts)
        res.json(
            scripts = scripts,
            difficulties = dificuldades,
            languages = idiomas,
            genders = generos
        );
    } catch (err) {
        console.error('Erro ao buscar scripts:', err);
        res.status(500).send({ error: 'Erro ao buscar scripts' });
    }
}));

module.exports = router;