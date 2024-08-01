const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');
const SearchProxy = require('./proxy/searchProxy');
const searchProxy = new SearchProxy(100);

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
app.get('/:hashcode/search/:query', async (req, res) => {
  const query = req.params.query;
  let { limit = 10, page = 1 } = req.query;
  
  limit = parseInt(limit);
  page = parseInt(page);

  if (!query) {
    return res.status(400).send({ error: 'Query parameter is required' });
  }

  const skip = (page - 1) * limit;

  try {
    const results = await searchProxy.search(query, limit, skip);
    res.json(results);
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