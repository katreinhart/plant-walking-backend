const router = require ('express').Router()
const controller = require('../controllers/plant-types-controller')

router.get('/', controller.getAllPlantTypes)
router.get('/:id', controller.getOnePlantType)

module.exports = router
