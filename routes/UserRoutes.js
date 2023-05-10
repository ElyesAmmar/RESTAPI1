const express= require("express")
const router = express.Router()
const controllers= require("../controllers/UserControllers")

router.get('/',controllers.getUsers)
router.post('/user',controllers.postUser)
router.put('/:id',controllers.updateUser)
module.exports = router