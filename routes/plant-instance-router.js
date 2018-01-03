const router = require ('express').Router()
const controller = require('../controllers/plant-instance-controller')

// router.post('/', controller.validate, controller.newInstance )
// router.patch('/:id', controller.update)
router.get('/:id', controller.getOne)
router.get('/', controller.getAll)

module.exports = router
