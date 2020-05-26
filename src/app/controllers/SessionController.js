const jwt = require('jsonwebtoken')
const User = require('../models/User')


class SessionController {
    async store(req, res) {

        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ error: "Usuario não existe" })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: "Senha Inválida" })
        }


        const { id, name } = user


        return res.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, '5c88f5c8519c983e65cf252178deda05', {
                expiresIn: '7d'

            })
        })
    }
}

module.exports = new SessionController();