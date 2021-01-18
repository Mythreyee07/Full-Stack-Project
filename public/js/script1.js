function form()
{
    var a = document.forms["mine"]["mail"].value;
    if(a== null|| a=="")
    {
        alert("Email is not filled");
    }
    var b = document.forms["mine"]["pass"].value;
    if(b== null|| b=="")
    {
        alert("Password is not filled");
      
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(new.mail.value))
{
 return true;
}
else
{
alert(" email address is invalid")
}
}




    