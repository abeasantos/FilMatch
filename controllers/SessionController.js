
const models = require('../database/models/index')

const SessionController = {
    movies: async (req,res,) =>{
    const sessoes = await  models.sessoes.findAll()

    const  filmes =  await models.filme.findAll()
    
    res.render('movies' ,{ sessoes, filmes, usuario:req.session.usuario})
    
    },

    sessions: async (req,res,) =>{
        const sessoes = await  models.sessoes.findAll()

        let filmeID = req.params.id
     
        res.render('sessaocriada' ,{ sessoes, filmeID, usuario:req.session.usuario})
        
    },
    findOne: async (req,res,) =>{
        let findSession = await models.sessoes.findOne({
            order: [ [ 'id', 'DESC' ]],
            })

            console.log(findSession)

        return res.render('sucessosessao', {findSession})
    }
}

module.exports = SessionController