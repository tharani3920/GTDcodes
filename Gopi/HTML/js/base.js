function convert(){
    let cmval = Number(document.getElementById("name").value)
    let inchval = cmval/2.54
    let reslut =  document.getElementById("res")
    reslut.innerHTML = inchval.toFixed(3) + ' inches'
}


// validation

const form = document.getElementById('vali')
const nameva = document.getElementById('nameva')
const emailva = document.getElementById('emailva')


form.addEventListener('submit', (m)=>{
    
    if(!ValidationIn()){
        m.preventDefault();
    }
})

function ValidationIn(){
    const namevali = nameva.value.trim();
    const emailvali = String(emailva.value).trim().toLowerCase(); 
    let success = true

    // name validation 
    const namevalidation = /^[A-Za-z0-9]{4,}$/;
    // email validation 
    const emailvalidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(namevali===''){
        success=false;
        setError(nameva,'Username is required')
    }
    else if(!namevali.match(namevalidation)){
        success=false;
        setError(nameva,'Please enter a valid User name')
    }
    else{
        setSuccess(nameva)
    }
    if(emailvali===''){
        success=false;
        setError(emailva,'Email is required')
    }
    else if(!emailvali.match(emailvalidation)){
        success=false;
        setError(emailva,'Please enter a valid email')
    }
    else{
        setSuccess(emailva)
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

// const validateEmail = (emailva) => {
//     return String(emailva)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };