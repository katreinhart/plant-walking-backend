const router = require ('express').Router()
const controller = require('../controllers/users-controller')
console.log('users router');

router.get('/', controller.getAll)
router.post('/register',
  controller.fieldsExist,
  controller.prune,
  controller.createNewUser,
  // controller.addUserProfile
)

router.post('/login',
  controller.fieldsExist,
  controller.prune,
  controller.loginUser,
  controller.getUserInfo,
  controller.getPlantInstance,
)

module.exports = router;
