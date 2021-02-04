const mongoose=require("mongoose");
const schema = mongoose.Schema;

const student_details_schema = schema({
    name:String,
    email:String,
    roll_no:String,
    password:String,

});


module.exports=mongoose.model("student_details",student_details_schema);