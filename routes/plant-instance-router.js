const router = require ('express').Router()
const controller = require('../controllers/plant-instance-controller')

router.get('/:id', controller.getOne)
router.get('/garden/:id', controller.getGarden)
router.get('/', controller.getAll)
router.patch('/:id', controller.updatePlantInstance)

module.exports = router
  
