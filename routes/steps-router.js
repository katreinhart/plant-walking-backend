const router = require ('express').Router()
const controller = require('../controllers/steps-controller')

console.log('steprs router');

router.post('/', controller.validate, controller.addSteps )


module.exports = router;
