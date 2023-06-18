const formSignUp = document.querySelector('.formsignup');
const formLogIn = document.querySelector('.formlogin');
const checkbox = document.querySelector('#chk')
const signBtn = document.querySelector('.signBtn')

let pattern = /^[a-z A-Z]{5,10}$/
let patternE =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
let patternP =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


let valueName = formSignUp.username.value;
formSignUp.addEventListener('keyup', e => {
    e.preventDefault();
    let valueName = formSignUp.username.value;
    let nameSpan = document.querySelector('.nameSpan')
    if (pattern.test(valueName)) {
        formSignUp.username.style.color = 'green';
        formSignUp.username.style.border = 'none'
        nameSpan.textContent = ''
       
    }else{
        formSignUp.username.style.color = 'red';
        formSignUp.username.style.border = '1px solid red'
        nameSpan.textContent = 'Not available'
    }
})

signBtn.addEventListener('click', function(e) {
   
    console.log(e);
    // checkbox.remove()
    // setAttribute('checked', '')
})

let valueEmail = formSignUp.email.value;
formSignUp.addEventListener('keyup', e => {
    e.preventDefault();
    let valueEmail = formSignUp.email.value;
    let nameSpan = document.querySelector('.nameSpanE')
    if (patternE.test(valueEmail)) {
        formSignUp.email.style.color = 'green';
        formSignUp.email.style.border = 'none'
        nameSpan.textContent = ''
       
    }else{
        formSignUp.email.style.color = 'red';
        formSignUp.email.style.border = '1px solid red'
        nameSpan.textContent = 'Not available'
    }
})

let valuePswrd = formSignUp.password.value;
formSignUp.addEventListener('keyup', e => {
    e.preventDefault();
    let valuePswrd = formSignUp.password.value;
    let nameSpan = document.querySelector('.nameSpanP')
    if (patternP.test(valuePswrd)) {
        formSignUp.password.style.color = 'green';
        formSignUp.password.style.border = 'none'
        nameSpan.textContent = ''
       
    }else{
        formSignUp.password.style.color = 'red';
        formSignUp.password.style.border = '1px solid red'
        nameSpan.textContent = 'Minimum eight characters, at least one  letter and one number'
    }
})












formLogIn.addEventListener('keyup', e => {
    e.preventDefault();
    let valueEmail = formSignUp.email.value;
    let valueEmail2 = formLogIn.email.value;
    let nameSpan = document.querySelector('.nameSpanEE')
    if (valueEmail == valueEmail2 ) {
        formLogIn.email.style.color = 'green';
        formLogIn.email.style.border = 'none'
        nameSpan.textContent = ''
       
    }else{
        formLogIn.email.style.color = 'red';
        formLogIn.email.style.border = '1px solid red'
        nameSpan.textContent = 'E-mail has not found'
    }
})

// let valuePswrd = formSignUp.password.value;
formLogIn.addEventListener('keyup', e => {
    e.preventDefault();
    let valuePswrd = formSignUp.password.value;
    let valuePswrd2 = formLogIn.password.value;
    let nameSpan = document.querySelector('.nameSpanPP')
    if (valuePswrd == valuePswrd2) {
        formLogIn.password.style.color = 'green';
        formLogIn.password.style.border = 'none'
        nameSpan.textContent = ''
       
    }else{
        formLogIn.password.style.color = 'red';
        formLogIn.password.style.border = '1px solid red'
        nameSpan.textContent = 'Password is wrong'
    }
})



