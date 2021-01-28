const express = require('express');
const app = express();
const router = express.Router();
const connection = require('E:\project\Full-Stack-Project\model\database.js');

connection.connect((err)=>{
    if(err) throw err;
    console.log("successfully connected");
})

router.get('/login', (req,res)=>{
    res.render('Login');
    
    })
    
    router.post('/validation',(req,res)=>{
        var email=req.body.Email; 
        var pwd=req.body.password;
        connection.query('select * from student_details where email like ? and pwd like ?',[email,pwd],(err,results)=>{
            if (err) throw err;
            if(results){
                connection.query('select student_details.reg.no,student_details.name ,student_marksheet.t1,student_marksheet.t2,student_marksheet.t3 from student_details join student_marksheet using(reg_no)',(err,results1)=>{
                    res.render('userlist',{data:results1});
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