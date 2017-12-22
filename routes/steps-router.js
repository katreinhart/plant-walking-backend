const router = require ('express').Router()
const controller = require('../controllers/steps-controller')

console.log('steps router');

router.post('/', controller.validate, controller.addSteps )
router.get('/:id', controller.getAllUserSteps)
router.get('/', controller.getAll)


module.exports = router;
