const router =  require('express').Router();
const {checkToken} =   require('../Middlewares/token_check');
const UserModel =  require('../Models/user');
router.get('/all-users',checkToken,async (req,res)=>{
  const data  =  await UserModel.getAllUsers()
  res.status(200).json({
    data
  })
}
)

module.exports = router