function form(){
var a = document.forms["new"]["name"].value;
var b = document.forms["new"]["roll"].value;
var c = document.forms["new"]["email"].value;
var d = document.forms["new"]["pass1"].value;
var e = document.forms["new"]["pass2"].value;
var f = document.forms["new"]["gender"].value;
if(a==null||a=="")
{
    alert("Name is not filled");
}
if(b==null||b=="")
{
    alert("Roll_No is not filled");
}
if(c==null||c=="")
{
    alert("Email is not filled");
}
if(d==null||d=="")
{
    alert("password is not filled");
}
if(e==null||e=="")
{
    alert("Confirm password is not filled");
}
if( d!=e)
{
    alert("please check your password again");
}
if(f==null||f=="")
{
    alert("Gender is not filled");
}
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mine.mail.value))
{
 return true;
}
else
{
alert(" email address is invalid")
}




}


var pwd= document.getElementById("pass1");
pwd.addEventListener('keyup',function(){
    checkpwd(pwd.value)
})
function checkpwd(pass){
    var strengthBar = document.getElementById("strength");
    var strength=0;
    if(pass.match(/[a-zA-Z0-9][a-zA-Z0-9]+/))
    {
        strength+=1;
    }
    if(pass.match(/[?<>^]+/))
    {
        strength+=1;
    }
    if(pass.match(/[!@$^&*()]+/))
    {
        strength+=1;
    }
    if(pass.length>5)
    {
        strength+=1;
    }
    switch(strength)
    {
        case 0:
            strengthBar.value=20;
            break;
        case 1:
            strengthBar.value=40;
            break; 
        case 2:
            strengthBar.value=60;
            break;
         case 3:
            strengthBar.value=80;
            break;  
        case 4:
            strengthBar.value=100;
            break;       

    }
}

  