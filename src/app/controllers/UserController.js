const User = require('../models/User');

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: {email: req.body.email}
        })

        if (userExists) {
            return res.status(400).json({error: "Usuario já existe"})
        }

        const { id, name, email } = await User.create(req.body)

        return res.json({
            id,
            name,
            email
        }).catch(err => {
            throw new Error(err);
        });
    }
}

module.exports = new UserController();