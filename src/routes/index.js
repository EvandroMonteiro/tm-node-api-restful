const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/clientes', ProductController.get)
// router.post('/clientes', ProductController.post)
// router.put('/clientes', ProductController.put)
// router.delete('/clientes', ProductController.delete)

module.exports = router