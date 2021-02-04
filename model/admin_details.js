const mongoose=require("mongoose");
const schema = mongoose.Schema;

const admin_details_schema = schema({
    name:String,
    email:String,
    password:String,

});


module.exports=mongoose.model("admin_details",admin_details_schema);
