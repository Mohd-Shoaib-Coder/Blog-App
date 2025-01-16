const mongoose=require("mongoose");
const { applyTimestamps } = require("./user");

const {Schema,model}=mongoose;


const PostSchema=new Schema({

    title:{

        type:String,
        required:true,
        
    },

    summary:{

        type:String,
        required:true,
    },

    content:{

        type:String,
        required:true,
    },

    cover:{

        type:String,
        required:true,
    },
    author:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}


},{

    timestamps:true,
});

const postModel=model("post",PostSchema);

 module.exports=postModel;
