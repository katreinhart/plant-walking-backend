const router = require ('express').Router()
const controller = require('../controllers/user-profiles-controller')

router.get('/:id', controller.getOneUserProfile)
router.post('/', controller.createUserProfile)


module.exports = router
