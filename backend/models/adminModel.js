const {Schema,model} = require('mongoose')
const adminSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    image:{
        type:String,
        required:[true,'image is requird']
    },
    role:{
        type:String,
        default:'admin'
    }
})

module.exports = model('admins',adminSchema)