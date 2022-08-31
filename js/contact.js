var nameInput=document.getElementById('name');
var emailInput=document.getElementById('email');
var passwordInput=document.getElementById('password');



nameInput.addEventListener('input',function(e){
    if(e.target.value.length<3){
        nameInput.style.border='1px solid red';
        document.getElementById('namev').style.display='block'

    }else{
        nameInput.style.border='1px solid green'
        document.getElementById('namev').style.display='none'
    }
})

emailInput.addEventListener('input',function(e){
   var val = e.target.value;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(val.length>0){
       if(val.match(mailformat))
       {
        emailInput.style.border='1px solid green'
        document.getElementById('emailv').style.display='none'
       }
       else
       {
        flag=1;
        emailInput.style.border='1px solid red'
        document.getElementById('emailv').style.display='block'
       }
}
})


var btn=document.getElementById('submit');
var btnMsg=document.querySelector('.hideMsg')
document.getElementById('submit').addEventListener('click',function(e){
    if(emailInput.value.length==0
       ||nameInput.value.length<3
       ||passwordInput.value.length<8||
       document.getElementById('emailv').style.display=='block'){
        e.preventDefault();
        btnMsg.style.display='block'
    }
})

passwordInput.addEventListener('input',function(e){
    if(e.target.value.length<8){
        passwordInput.style.border='1px solid red'
        document.getElementById('passwordv').style.display='block'
    }else{
        passwordInput.style.border='1px solid green'
        document.getElementById('passwordv').style.display='none'   
    }
})
