const name=document.getElementById('user-name');
const Confirmname=document.getElementById('Confirmuser-name');
const password=document.getElementById('password');
const Confirmpassword=document.getElementById('cpassword');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

function validateform(){
    if(name.value==''){
    document.getElementById('nameError').innerText="name is empty!"
    } else if(name.value !== Confirmname.value){
        document.getElementById('nameError').innerText="name doesn't match!"
    }else{
        document.getElementById('nameError').innerText="";
    }
    if(password.value.length ==""){
        document.getElementById('passError').innerText="password is empty!"
    }else if(password.value.length !== Confirmpassword.value.length){
        document.getElementById('passError').innerText="password doesn't match!"
    }else{
        document.getElementById('passError').innerText="";
    }

    if(phone.value.length >1 && phone.value.length < 10){
        document.getElementById('phoneError').innerText="phone number is not valid";
    }else{
        document.getElementById('phoneError').innerText="";
    }
    return false;
}

