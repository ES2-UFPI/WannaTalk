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

// User CREATE
    router.get('/new', (req,res) => {
        res.render("user/userform")
    })

    router.post("/new", async (req,res) => {
        const newUser = await prisma.user.create({
            data:{
                name: req.body.name,
                email: req.body.email,
                hashcode: req.body.email + req.body.password
            }
        })
        console.log("Registrado com sucesso")
        res.redirect("/list")

    })



// USER LIST
    router.get('/list', async (req,res) => {
        const list = await prisma.user.findMany();
        res.json(list)
    })


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
            res.redirect("/user/list")
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
                res.redirect("/user/list")
            })
        })








module.exports = router