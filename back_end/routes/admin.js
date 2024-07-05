const express = require('express')
const router = express.Router()

const prisma = require('../prisma/client')




// User -------------------------------------------------------------------------




// User CREATE
router.get('/newuser', (req,res) => {
    res.render("admin/userform")
})

router.post("/newuser", async (req,res) => {
    const newUser = await prisma.user.create({
        data:{
            name: req.body.name,
            email: req.body.email,
            hashcode: req.body.email + req.body.password,
            username: req.body.username,
        }
    }).then(() => {
      console.log("Successful to user register")
      res.redirect("/admin/userlist")
    }).catch((err) => {
      console.log("Failure to user register\nErro: ", err)
      res.redirect("/")
    })
    

})



// USER LIST
router.get('/userlist', async (req,res) => {
    const list = await prisma.user.findMany();
    res.json(list)
})






// Context -------------------------------------------------------------------------






// Context CREATE
router.get('/newcontext', (req,res) => {
    res.render("admin/contextform")
})


router.post('/newcontext', async (req, res) => {
    const { name, code, description } = req.body;
  
    try {
      const existingContext = await prisma.context.findUnique({
        where: { code }
      });
  
      if (existingContext) {
        console.log('Código existente');
        return res.redirect('/admin/newcontext');
      }
  
      const newContext = await prisma.context.create({
        data: {
          name,
          code,
          description
        }
      });
  
      console.log('Registrado com sucesso');
      res.redirect('/admin/contextlist');
    } catch (err) {
      console.error('Error:', err);
      res.redirect('/');
    }
  });


// Context LIST
router.get('/contextlist', async (req,res) => {
    const list = await prisma.context.findMany();
    res.json(list)
})





// Language -------------------------------------------------------------------------




// Language CREATE
router.get('/newlanguage', (req,res) => {
    res.render("admin/languageform")
})


router.post('/newlanguage', async (req, res) => {
    const { name, code, flag } = req.body;
  
    try {
      const existingLanguage = await prisma.language.findUnique({
        where: { code }
      });
  
      if (existingLanguage) {
        console.log('Código existente');
        return res.redirect('/admin/newlanguage');
      }
  
      const newlanguage = await prisma.language.create({
        data: {
          name,
          code,
          flag
        }
      });
  
      console.log('Registrado com sucesso');
      res.redirect('/admin/languagelist');
    } catch (err) {
      console.error('Error:', err);
      res.redirect('/');
    }
  });


// Language LIST
router.get('/languagelist', async (req,res) => {
    const list = await prisma.language.findMany();
    res.json(list)
})







// Agent -------------------------------------------------------------------------
router.get('/newagent', (req,res) => {
    res.render("admin/agentform")
})


router.post('/newagent', async (req, res) => {
    const { name, code } = req.body;
  
    try {
      const existingAgent = await prisma.agent.findUnique({
        where: { code }
      });
  
      if (existingAgent) {
        console.log('Código existente');
        return res.redirect('/admin/newagent');
      }
  
      const newAgent = await prisma.agent.create({
        data: {
          name,
          code,
        }
      });
  
      console.log('Registrado com sucesso');
      res.redirect('/admin/agentlist');
    } catch (err) {
      console.error('Error:', err);
      res.redirect('/');
    }
  });


// Agent LIST
router.get('/agentlist', async (req,res) => {
    const list = await prisma.agent.findMany();
    res.json(list)
})



















module.exports = router