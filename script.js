let mail = document.querySelector("#text-input");
let btn = document.querySelector(".btn");
let err = document.querySelector('.error');

const emailIsValid = (email) => {
    email = mail.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

const validator = () =>{
    if(emailIsValid(mail) == true){
        mail.style.border = "1px solid hsl(0, 0%, 59%)";
        err.style.visibility = "hidden"
        alert('valid mail, thanks for subbing')
    }else{
        mail.style.border = "1px solid hsla(246, 25%, 77%, 60%)";
        err.style.visibility = "visible"
    }
}

btn.addEventListener("click", validator)
