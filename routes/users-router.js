const router = require ('express').Router()
const controller = require('../controllers/users-controller')
const UserProfileModel = require('../controllers/user-profiles-controller')
console.log('users router');

router.get('/', controller.getAll)
router.post('/register',
  controller.registerFieldsExist,
  controller.registerPrune,
  controller.createNewUser,
  UserProfileModel.createUserProfile,
)

router.post('/login',
  controller.loginFieldsExist,
  controller.loginPrune,
  controller.loginUser,
  controller.getUserInfo,
  controller.getPlantInstance,
)

module.exports = router;
