const UserModel = require('../Models/user');
const bc = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerControl= async (req,res)=>{
    const userObj =new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    const emails = await UserModel.getUserByEmail(userObj.email);
    const user=await UserModel.getUserByUsername(userObj.name); 
    console.log(user);
    let message = 'User already exists';
    if(user.length>0 || emails.length>0){
        res.status(400).json({message:message
          ,success:false
        });
        
    }
    else{
    userObj.password= await bc.hash(userObj.password,15);
    message = await UserModel.createUser(userObj);
    console.log(message);
    res.status(200).json({message:message
      ,success:true
    });
    
  }
    
  
}

const loginControl = async (req,res)=>{
    
    const userObj =new UserModel({
        email:req.body.email,
        password:req.body.password
    });
    const user=await UserModel.getUserByEmail(userObj.email);
    
    if(user.length>0){
        const valid = await bc.compare(userObj.password,user[0].password);
        if(valid){
          const token = jwt.sign({email:userObj.email,name:user[0].username},process.env.JWT_SECRET, {expiresIn:'1h'});
          console.log("Successful login");
            res.status(200).json({message:'Login successful'
            ,success:true,
            token:token,
            username:user[0].username
            });
            // status 201 is used for successful creation
            

        }
        else{
            res.status(403).json({message:'Invalid password'
            ,success:false});
        }
    }
    else{
        res.status(400).json({message:'User does not exist'
        ,success:false});
    }
    res.end();
} 

module.exports = {registerControl,loginControl};