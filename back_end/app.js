const express = require('express')
const app     = express()


app.get("/", (req,res) => {
    res.json({nome: "teste"})
})


const PORT = 3030
app.listen(PORT, () => {
    console.log("Conexão ativa na porta: "+ PORT)
})
