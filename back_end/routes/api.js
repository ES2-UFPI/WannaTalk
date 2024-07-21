const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');

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


module.exports = router;