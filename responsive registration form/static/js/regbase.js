const form = document.getElementById('form')
const userva = document.getElementById('user')
const emailva = document.getElementById('email')
const phnova = document.getElementById('phno')
const dobva = document.getElementById('dob')
const passva = document.getElementById('pass')
const conpassva = document.getElementById('conpass')


form.addEventListener('submit', (me)=>{
    if(!ValidationIn()){
        me.preventDefault();
    }
})

function ValidationIn(){
    const uservali = userva.value.trim();
    const emailvali = String(emailva.value).trim().toLowerCase();
    const phnovali = phnova.value.trim();
    const dobvali = dobva.value
    const passvali = passva.value.trim();
    const conpassvali = conpassva.value.trim();
    let success = true

    
    // name validation 
    const namevalidation = /^[A-Za-z0-9]{4,}$/;
    // email validation 
    const emailvalidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // phone number validation 
    const phvalidation = /^(\([0-9]{3}\)\s?|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;;
    // password validation 
    const passvalidation = /^[A-Za-z]\w{8}$/;



    if(uservali===''){
        success=false;
        setError(userva,'Username is required')
    }
    else if(!uservali.match(namevalidation)){
        success=false;
        setError(userva,'Please enter a valid User name')
    }
    else{
        setSuccess(userva)
    }

    if(emailvali===''){
        success=false;
        setError(emailva,'Email-ID is required')
    }
    if(!emailvali.match(emailvalidation)){
        success=false;
        setError(emailva,'Please enter a valid email')
    }
    else{
        setSuccess(emailva)
    }


    if(phnovali===''){
        success=false;
        setError(phnova,'Phone number is required')
    }
    else if(!phnovali.match(phvalidation)){
        success=false;
        setError(phnova,'Please enter a valid Phone Number')
    }
    else{
        setSuccess(phnova)
    }

    if(dobvali===''){
        success=false;
        setError(dobva,'Date OF Birth is required')
    }
    else{
        setSuccess(dobva)
    }

    if(passvali===''){
        success=false;
        setError(passva,'Password is required')
    }
    else if(passvali.length < 8){ 
        success=false;
        setError(passva, 'Password must be at least 8 characters'); 
    } 
    else if(passvali.search(/[a-z]/) < 0) { 
        success=false;
        setError(passva, 'Password must contain at least one lowercase letter'); 
    } 
    else if(passvali.search(/[A-Z]/) < 0) { 
        success=false;
        setError(passva, 'Password must contain at least one uppercase letter'); 
    } 
    else if(passvali.search(/[0-9]/) < 0) { 
        success=false;
        setError(passva, 'Password must contain at least one number'); 
    }
    else{
        setSuccess(passva)
    }

    if(conpassvali===''){
        success=false;
        setError(conpassva,'Confirm password is required')
    }
    else if(conpassvali!==passvali){
        success=false;
        setError(conpassva,'Password does not match')
    }
    else{
        setSuccess(conpassva)
    }

    return success;
}


function setError(element, msg){
    const input = element.parentElement;
    const error = input.querySelector('.error')

    error.innerText = msg;
    input.classList.add('error')
    input.classList.remove('success')
}


function setSuccess(element){
    const input = element.parentElement;
    const error = input.querySelector('.error')

    error.innerText = '';
    input.classList.add('success')
    input.classList.remove('error')
}

