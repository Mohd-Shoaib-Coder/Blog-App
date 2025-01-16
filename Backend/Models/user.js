const mongoose=require("mongoose");
const {Schema,model}=mongoose;



 const UserSchema=new Schema({

    name:
    {

        type:String,
        required:true,
        unique:true,
    },

    email:{


        type:String,
        required:true,
        unique:true,
    },
    password:{

        type:String,
        required:true,
        
    }
 });

 const userModel=model("user",UserSchema);

 module.exports=userModel;

