const userModel = require('../models/user-model')

const getUser =(req,res)=>{
    try{
        const user = userModel.getUser()
        if(user.length==0){
            res.status(200).json({message:'Empty Data User'})
        }
        else{
            res.status(200).json(user)
        }
    }catch (error){
        console.log(error);
    }
    
}

const getUserByIndex = (req,res)=>{
    try{
        const user = userModel.getUserByIndex(req.params.id)
    }catch(error) {
        console.log(error)
    }
}

module.exports = {getUser, getUserByIndex}