const router = require ('express').Router()
const controller = require('../controllers/steps-controller')

console.log('steps router');

router.post('/', 
  controller.validate,
  controller.addSteps,
  controller.getCurrentUserPlant,
  controller.updateUserCurrentPlant,
  controller.getActivePlantType,
  controller.checkPlantTypeStepsRequired,
  controller.isPlantFinished
)
router.get('/:id', controller.getAllUserSteps)
router.get('/', controller.getAll)


module.exports = router;
