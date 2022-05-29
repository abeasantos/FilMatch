const models = require('../database/models/index')


const CriarSessaoController = {
    findAll: async (req,res,) =>{

    const  filmes =  await models.filme.findAll()

    console.log(filmes[1].nome)
    
    res.render('criarsessao' ,{ filmes, usuario:req.session.usuario})
    
    },
    
    create: async (req,res,) =>{
        let {nome, descricao, data, horario, link} = req.body
        
        console.log(nome)

        let sessao = await models.sessoes.create({nome, descricao, data, horario, link})

        return res.redirect('/login')
    }
}

  
module.exports = CriarSessaoController