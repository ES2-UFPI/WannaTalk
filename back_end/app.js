const express = require('express')
const app     = express()
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const users = require("./routes/user")
const admin = require("./routes/admin")

// Configurações

    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');



    // Body Parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


    // Middleware
    app.use("/user", users)
    app.use("/admin", admin)

// Rotas

    app.get("/", (req,res) => {
        res.json({nome: "teste"})
    })




// Conexão

    const PORT = 3030
    app.listen(PORT, () => {
        console.log("Conexão ativa na porta: "+ PORT)
    })
