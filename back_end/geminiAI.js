const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();


const key = process.env.GOOGLE_API_KEY

const genAI = new GoogleGenerativeAI(key)


async function generateText(prompt){
    try{
        const model = genAI.getGenerativeModel({model: "gemini-pro"}) // Escolha do modelo
        const prompt_ia = String(prompt)

        const result = await model.generateContent(prompt_ia); // Envia o prompt
        const response = await result.response // Recebe a resposta do prompt
        console.log(response)
        const text = response.text()   // Pega o texto da resposta do prompt
        console.log(text)
    }catch(err){
        console.log(err)
    }
}

// Exemplo de uso
//generateText("Faça um resumo sobre buracos de minhoca")