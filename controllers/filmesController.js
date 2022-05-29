const models = require('../database/models/index')

const filmesController = {
    movies: async (req,res,) =>{
    
    const sessoes = await  models.sessoes.findAll()

    const  filmes =  await models.filme.findAll()

    const mensagem = await models.Mensagems.findAll()

    let filmeID = req.params.id
    
    return res.render('resultadoFilme' ,{ sessoes, filmes, mensagem, filmeID, usuario:req.session.usuario})
    
    }
}

module.exports = filmesController