const router = require ('express').Router()
const controller = require('../controllers/user-profiles-controller')

router.get('/:id', controller.getOneUserProfile)

module.exports = router
