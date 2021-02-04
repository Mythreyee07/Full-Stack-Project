const mongoose=require("mongoose");
const schema = mongoose.Schema;

const student_marksheet_schema = schema({
    name:String,
    roll_no:String,
    exam_date:Date,
    t1:Number,
    t2:Number,
    t3:Number
    email:String,
    

});


module.exports=mongoose.model("student_marksheet",student_marksheet_schema);
