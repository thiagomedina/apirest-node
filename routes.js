const { Router } = require('express');



const routes = new Router();

routes.get('./teste', (req, res) => {
    return req.json({ ok: true})
})

module.exports = routes;