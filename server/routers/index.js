var router = require('express').Router()

router.get('/api', (req, res, next) => {
    res.send({data:'Testing API'})
})