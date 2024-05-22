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

module.exports = router;