const adminModel = require('../models/adminModel')
const {responseReturn} = require('../utiles/response')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { createToken } = require('../utiles/tokenCreate')
class authControllers {
    admin_login = async(req,res)=>{
         const {email,password} = req.body
          
         try {
             const admin = await adminModel.findOne({email}).select('+password')
             if(admin){
     
                   const match = await bcrypt.compare(password,admin.password)
                   if(match){
                          const token = await createToken({
                            id: admin._id,
                            role:admin.role
                          })
                          res.cookie('accessToken', token, {  
                            expires: new Date(Date.now() +7*24*60*60*1000), // Convert expirationTime to milliseconds
                          });
                    responseReturn(res,200,{token,message:'login succes'})
                   }
                   else{
                    responseReturn(res,404,{error:'Password wrong'})
                   }
             }else{
                responseReturn(res,500,{error:'Email dose not found'})
             }
         } catch (error) {
            responseReturn(res,500,{error:error.message})
         }
    }
    getUser = async(req,res)=>{
      const {id,role} =req

      try {
         if(role === 'admin'){
          const user = await adminModel.findById(id)
          responseReturn(res,200,{userInfo:user})
         }else{
          console.log('seller infor')
         }
          
      } catch (error) {
        console.log(error)
      }
    }
}

module.exports = new authControllers()