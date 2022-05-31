const bcrypt = require ('bcryptjs')

var  { Usuario }  = require ('../database/models/index')

const loginController = {
    user: async(req,res) =>{
        const {email, senha} = req.body
        const usuario = await Usuario.findOne({
            atributes: ['email', 'senha'],
            where: {
                email: email,
            }
        })
        console.log(req.body)
        console.log(usuario.senha)
        console.log(bcrypt.compareSync(senha, usuario.senha))

        if (!usuario) {
            return res.render('login', {erro:'Email e/ou senha estão incorretos. Tente novamente'})
        }

        if(!bcrypt.compareSync(senha, usuario.senha)){
            console.log('senha')
            console.log(senha)
            return res.render('login', {erro:'Email e/ou senha estão incorretos. Tente novamente'})
        }


        res.redirect('/movies')
    }
}

module.exports = loginController


