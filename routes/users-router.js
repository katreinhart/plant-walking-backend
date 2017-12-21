const router = require ('express').Router()
const controller = require('../controllers/users-controller')
console.log('users router');

router.post('/register', controller.createNewUser)
// router.post('/login', controller.loginUser)

module.exports = router;
