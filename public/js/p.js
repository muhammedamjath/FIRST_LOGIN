const emailRejex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const numberrejex=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
const passwordrejex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/


const emailinput=document.getElementsByName('email')[0]
const password=document.querySelector('.password')
const cpassword=document.querySelector('.cpassword')
const phonenumber=document.querySelector('.number')

emailinput.addEventListener('blur',()=>{
    if(! emailRejex.test(emailinput.value)){
       
        emailinput.value=""
        emailinput.placeholder='invelid email'
        emailinput.classList.add('err-place')
    }
})

cpassword.onblur=()=>{
    if(cpassword.value !== password.value ){
        cpassword.value=""
        cpassword.placeholder='passwords must be equal !'
        cpassword.classList.add('err-place')

    }else{
        cpassword.placeholder='conform password'
        cpassword.classList.remove('err-place')
    }
}

phonenumber.onblur=()=>{
    if( ! numberrejex.test(phonenumber.value)){

        phonenumber.value=''
        phonenumber.placeholder='invalid phoneNumber'
        phonenumber.classList.add('err-place')


    }
}

password.onblur=()=>{
    if( ! passwordrejex.test(password.value)){
        password.value=''
        password.placeholder='invalid password'
        password.classList.add('err-place')


    }
}