const express = require('express')
const app     = express()
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const prisma = require("./prisma/client")

const user_router = require("./routes/user")
const admin_router = require("./routes/admin")



// Configurações




    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');



    // Body Parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


    // Middleware
    app.use("/user", user_router)
    app.use("/admin", admin_router)

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    



// Rotas

    app.get("/", (req,res) => {
        res.json({nome: "teste"})
    })



// Conexão

    const PORT = 3030
    app.listen(PORT, () => {
        console.log("Conexão ativa na porta: "+ PORT)
    })
