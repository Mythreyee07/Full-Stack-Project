const express = require('express');
const app = express();
const router = express.Router();
//const connection = require('../../model/database.js');
const {mongourl}=require('../../model/database')
const {student_details}=require('../../model/student_details');
const {student_marksheet}=require('../../model/student_marksheet');
const {admin_details}=require('../../model/admin_details');

mongoose.connect(mongourl,{useNewUrlParse:true});

mongoose.connection.on('connected',()=>{
    console.log("Mongoose is connected");
})



connection.connect((err)=>{
    if(err) throw err;
    console.log("successfully connected");
})

router.get('/login', (req,res)=>{
    res.render('Login');
    
    })
    
    router.post('/validation',(req,res)=>{
        var email=req.body.Email; 
        var password=req.body.password;
        connection.query('select email from student_details where email like ?',[email],(err,results)=>{
            if (err) throw err;
            if(results){
                connection.query('select password from student_details where email like ? and password like ?)',[email,password],(err,results1)=>{
                    connection.query('select student_marksheet.*,student_details.email from student_marksheet join student_details on student_marksheet.reg_no= student_details.reg_no where email like ? and password like ?',[email,password],(err,results)=>{
                        console.log(results);
                        res.render('userlist',{Data:results});
    
                    })
                    
                })
            }
        })
    
    })
        
    router.get('/Signup',(req,res)=>{
    res.render('Signup');
    
    })
    
    router.use('/SignupValidate',(req,res) =>{
    console.log('validated');
    var Uname= req.body.Uname;
    var email=req.body.Email;
    var regno =req.body.rollno;
    var pwd=req.body.password;
    
    connection.query('insert into student_details values(?,?,?,?)',[Uname,email,regno,pwd],(err,results)=>{
        if(err) throw err;
        if(results){
            res.render('Login');
        }
    })
    
    })
    module.exports= router;