const speech = require("@google-cloud/speech");
const fs = require("fs");


const token = process.env.GOOGLE_APPLICATION_CREDENTIALS;

async function transcribeAudio(audioFile){
    try{
        const speechClient = new speech.SpeechClient();

        const file= fs.readFile(audioFile);
        const audioBytes = file.toString('base64');

        const audio = {
            content: audioBytes
        };

        const config = {
            encoding: 'LINEAR16',
            sampeRateHertz: 44100,
            languageCode: 'en-US'
        }
        return new Promise((resolve, reject) => {
            speechClient.recognize({audio,config}).then(data=>{
                resolve(data);
            }).catch(err=>{
                reject(error);
            })

        })

    }catch(err){
        console.log('ERROR: ', error);
    }
}

(async() => {
    const data = await transcribeAudio(''); // colocar arquivo do áudio
    console.log(data);
})