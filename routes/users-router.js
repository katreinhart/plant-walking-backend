const router = require ('express').Router()
const controller = require('../controllers/users-controller')
console.log('users router');
router.get('/', controller.getAll)


module.exports = router;
