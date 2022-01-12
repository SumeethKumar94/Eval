const loginForm = document.getElementById("loginf");
const loginButton = document.getElementById("lsubmit");
const loginErrorMsg = document.getElementById("p");
document.getElementById("checkboxes").display="none";

loginButton.addEventListener("click", (e) => {
    e.preventDefault();


    var username = document.getElementById('uname').value;
    var password =  document.getElementById('passw').value;
console.log(username+" "+password);

    if (username == "Sumeeth" && password == "1234") {
        alert("You have successfully logged in.");
        window.open("dashboard.html");
    } else {
        loginErrorMsg.innerHTML="Username Password Incorrect";
    }
})

var error=0;

function fname()
{
     user=form.name1.value;
     var nameform = /^[a-zA-Z\s]*$/;
    if(user=="")
    {
        document.getElementById("fn").innerHTML="Enter  Full name";
        form.name.focus();
        error=1;
        
    }
    else if(user.length <=3 || !user.match(nameform))
    {
        document.getElementById("fn").innerHTML="Its not a valid  Full name ";
        form.name.focus();
        error=1;
    }
    else
    {
        document.getElementById("fn").innerHTML=""; 
        error=0;
    }
}   
function onames()
{
     oname=form.oname.value;
     var nameformat = /^[a-zA-Z\s]*$/;
    if(oname=="")
    {
        document.getElementById("on").innerHTML="Enter  Occupation";
        form.onames.focus();
        error=1;
        
    }
    else if(oname.length <=3 || !oname.match(nameformat))
    {
        document.getElementById("on").innerHTML="Its not a valid Occupation ";
        form.oname.focus();
        error=1;
    }
    else
    {
        document.getElementById("on").innerHTML=" "; 
        error=0;
    }
} 
function eml()
{
    ema=form.email.value;
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(ema=="")
    {
        document.getElementById("em").innerHTML="Enter Email";
        form.email.focus();
        error=1;
    }
    else if(!ema.match(format))
    {
        document.getElementById("em").innerHTML="Enter Valid Email Format";
        form.email.focus();  
        error=1;
    }
    else
    {
        document.getElementById("em").innerHTML=""; 
        error=0;
    }
}
function phon()
{
    ph=form.phone.value;
    if(ph=="")
    {
        document.getElementById("ph").innerHTML="Enter Phone number";
        form.phone.focus();
        error=1;
    }

    else if(isNaN(ph))
    {
        document.getElementById("ph").innerHTML="Enter Valid Phone number";
        form.phone.focus();
        error=1;
    }
    else if(ph.length !=10)
    {
     document.getElementById("ph").innerHTML="Enter 10 digits number";
     form.phone.focus();
     error=1;
    }
    else
    {
        document.getElementById("ph").innerHTML=" "; 
        error=0;
    }
}
function pas()
{
    passw=form.pass.value;
    if(passw=="")
    {
        document.getElementById("ps").innerHTML="Enter password";   
        form.pass.focus();
        error=1;
    }
    else if(passw.length<6)
    {
        document.getElementById("ps").innerHTML="Password Strenght must be greater than 6 characters"; 
        form.pass.focus(); 
        error=1;
    }
    else
    {
        document.getElementById("ps").innerHTML=" "; 
        error=0;
    }
}
function cpass()
{
    passw=form.pass.value;
    con=form.con.value;
    if(con=="")
    {
        document.getElementById("cn").innerHTML="Enter Confirm password";   
        form.con.focus();
        error=1;
    }
    else if(passw!=con)
    {
        document.getElementById("cn").innerHTML="Confirm password not same as Password";   
        form.con.focus();  
        error=1;
    }
    else
    {
        document.getElementById("cn").innerHTML=" "; 
        error=0;
    }
}

function validate(form)
{
if(error==1)
{
    fname();
    eml();
    phon();
    cpass();
    pas();
    document.getElementById("err").innerHTML="Please Input all Fields Correctly"; 
    return false;
   
}
else
{
    document.getElementById("err").innerHTML="";
    alert("Sucessfully Registerd");
    window.open("dashboard.html");
    return true;

}

}


