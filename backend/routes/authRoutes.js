const router  = require('express').Router()
const authControllers = require('../controllers/authControllers')
const{authMiddleware} = require('../middelewares/authMiddleware')
router.post('/admin-login',authControllers.admin_login)
 router.get('/get-user',authMiddleware,authControllers.getUser)


module.exports = router 