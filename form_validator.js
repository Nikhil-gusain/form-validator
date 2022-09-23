console.log('this is form validator')


// add class (is-invalid) to input for making form invalid 




let user_Name = document.getElementById("user_Name")
let user_Email = document.getElementById("user_Email")
let user_phone_no = document.getElementById("user_phone_no")
let Password = document.getElementById("Password")


validEmail = false
validName = false
validPhone = false
validpass = false




//adding evant listner for checking the validity of user name
user_Name.addEventListener('blur',()=>{
    let required_word =/^([a-zA-Z]){3,20}$/
    let user_data = user_Name.value
    console.log("data = ", user_data )
    console.log(required_word.exec(user_data))
    if (required_word.test(user_data)){
        console.log(required_word.test(user_data))
        console.log("valid form")
        user_Name.classList.remove("is-invalid")
        validName = true
    }
    else{
        user_Name.classList.add("is-invalid")
        console.log(required_word.test(user_data))
        console.log("invalid form")
        validName = false
        
    }
})


//adding evant listner for checking the validity of user_Email
user_Email.addEventListener('blur',()=>{
    let required_word =/^([a-zA-Z])([0-9a-zA-Z \.]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/
    let user_data = user_Email.value
    console.log(required_word.exec(user_data))
    if (required_word.test(user_data)){
        console.log(required_word.test(user_data))
        console.log("valid form")
        user_Email.classList.remove("is-invalid")
        validEmail = true
    }
    else{
        user_Email.classList.add("is-invalid")
        console.log(required_word.test(user_data))
        console.log("invalid form")
        validEmail = false
        
    }
})


//adding evant listner for checking the validity of user_phone_no
user_phone_no.addEventListener('blur',()=>{
    let required_word =/([0-9]){10}/
    let user_data = user_phone_no.value
    console.log(required_word.exec(user_data))
    if (required_word.test(user_data)){
        console.log(required_word.test(user_data))
        console.log("valid form")
        user_phone_no.classList.remove("is-invalid")
        validPhone = true
    }
    else{
        user_phone_no.classList.add("is-invalid")
        console.log(required_word.test(user_data))
        console.log("invalid form")
        validPhone = false
        
    }
})


//adding evant listner for checking the validity of Password
Password.addEventListener('blur',()=>{
    let required_word =/^([0-9a-zA-Z]){8,20}$/
    let user_data = Password.value
    //console.log("pass =", user_data)
    console.log(required_word.exec(user_data))
    if (required_word.test(user_data)){
        console.log(required_word.test(user_data))
        console.log("valid form")
        Password.classList.remove("is-invalid")
        validpass = true
    }
    else{

        Password.classList.add("is-invalid")
        console.log(required_word.test(user_data))
        console.log("invalid form")
        validpass = false
        
    }
})


let submit_btn = document.getElementById("submit_btn")

submit_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let message = document.getElementById('message')
    if (validEmail && validName && validPhone && validpass) {
        html = `<div class="alert alert-Success alert-dismissible fade show" role="alert" style = "color:green">
        <strong>success</strong> Your form have been submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`
        message.innerHTML = html;
        setTimeout(function () {
            message.innerHTML = ''
        }, 4000);
        return true
       
    }
    else {
        html = `<div class="alert alert-error alert-dismissible fade show" role="alert" style = "color:red">
        <strong>Error</strong> please fill your form properly
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`
        message.innerHTML = html;
        setTimeout(function () {
            message.innerHTML = ''
        }, 2000);
        return false
       
    }
})

