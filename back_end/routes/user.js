const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');

// Middleware de tratamento de erros
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};


// Rota para renderizar a configuração do chat
router.get("/:hashcode/chatconfig", asyncHandler(async (req, res) => {
    const { hashcode } = req.params;

    const user = await prisma.user.findFirst({ where: { hashcode } });

    if (!user) {
        console.log(`404\nError: User with hashcode ${hashcode} not found`);
        return res.redirect("/admin/userlist");
    }

    const [context_list, language_list, agent_list] = await Promise.all([
        prisma.context.findMany(),
        prisma.language.findMany(),
        prisma.agent.findMany()
    ]);

    res.render("user/chatconfig", {
        agents: agent_list,
        languages: language_list,
        contexts: context_list
    });
}));



// Rota para acessar o chat
router.get("/:hashcode/chat", asyncHandler(async (req, res) => {
    const { hashcode } = req.params;

    const user = await prisma.user.findFirst({ where: { hashcode } });

    if (!user) {
        console.log(`404\nError: User with hashcode ${hashcode} not found`);
        return res.redirect("/admin/userlist");
    }

    res.json(user);
    // res.render("/target") // Renderizar a tela do chat
}));





// Rota para pesquisar 
router.get('/:hashcode/search/:query', async (req, res) => {
    const query  = req.params.query;
    limit = 10, page = 1 
    // const { query, limit = 10, page = 1 } = req.query; // conversar com o front
    
    if (!query) {
        return res.status(400).send({ error: 'Query parameter is required' });
    }
    
    const skip = (page - 1) * limit; // paginação, futuramente puxar do front a informação

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
        ])
        
        res.json({
                users,
                roteiros,
                contextos,
                idiomas,
            });
        
    
        
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send({ error: 'An error occurred while fetching data' });
    }
});

router.post('/criarRoteiro', asyncHandler(async (req, res) => {
    const {
        resumo,
        dificuldade,
        idiomas,
        genero,
        notas,
        referencias,
        title
    } = req.body;

    if (!title || !resumo || !dificuldade || !genero || !idiomas) {
        return res.status(400).send({ error: 'Campos obrigatórios estão faltando' });
    }

    // Converta os IDs para inteiros
    const dificuldadeId = parseInt(dificuldade, 10);
    const generoId = parseInt(genero, 10);
    const idiomasId = parseInt(idiomas, 10);

    if (isNaN(dificuldadeId) || isNaN(generoId) || isNaN(idiomasId)) {
        return res.status(400).send({ error: 'IDs inválidos' });
    }

    summary = resumo;
    refs = referencias;
    notes = notas;

    try {
        const novoRoteiro = await prisma.script.create({
            data: {
                title,
                summary,
                difficulty: { connect: { id: dificuldadeId } },
                gender: { connect: { id: generoId } },
                language: { connect: { id: idiomasId } },
                notes,
                refs
            }
        });

        console.log("ROTEIRO CRIADO");
        res.status(201).json(novoRoteiro);
    } catch (err) {
        console.error('Erro ao criar roteiro:', err);
        res.status(500).send({ error: 'Erro ao criar roteiro' });
    }
}));







module.exports = router;