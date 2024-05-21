const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* Prisma info
findMany: Used to retrieve multiple records from a database table.
findUnique: Used to retrieve a single record that matches a unique constraint.
findFirst: Used to retrieve the first record that matches the given criteria.
findRaw: Used for raw SQL queries.
*/



// Rotas

    // Inicial

    router.get("/", (req,res) => {
        res.send("Test")
    })


    // Configuração do chat
    router.get("/:hashcode/chatconfig", (req,res) => {

        prisma.user.findFirst({
            where: {
            hashcode: req.params.hashcode
        }}).then((user) => {
        // Passar informações de idiomas, agentes e contextos cadastrados
            res.render("user/chatconfig")

        }).catch((err) => {
            console.log(404+"\nError: "+ err)
            res.redirect("/admin/userlist")
        })


    })



    // Conversa com chat
        router.get("/:hashcode/chat", (req, res) => {
            prisma.user.findFirst({
                where: {
                hashcode: req.params.hashcode
            }}).then((user) => {
                // Validação ok
                res.json(user)
    //            res.render("/target") Renderizar a tela do chat

            }).catch((err) => {
                console.log(err)
                res.redirect("/admin/userlist")
            })
        })








module.exports = router