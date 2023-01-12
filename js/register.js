const nameReg= document.getElementById("name-register");
const emailReg = document.getElementById("email-register");
const passwordReg=document.getElementById("password-register");
const passwordRegRepeat=document.getElementById("repeatPassword-register");
const buutonReg=document.getElementById("register");
const haveAccount=document.getElementById("have-account");
let userRegister;
if (localStorage.getItem("users") != null) {
  userRegister = JSON.parse(localStorage.getItem("users"));
} else {
  userRegister = [];
}
buutonReg.addEventListener("click" , function(){
    if(userRegister.length > 0){
      for (let i = 0; i < userRegister.length; i++) {
        if (userRegister[i].email == emailReg.value) {
          haveAccount.style.cssText="display:block;";
          setTimeout(function(){
            haveAccount.style.cssText="display:none;";
          },1000)
        } else {
          let user = {
            name: nameReg.value,
            email: emailReg.value,
            password: passwordReg.value,
            passwordRepeat:passwordRegRepeat.value
          };
          userRegister.push(user);
          localStorage.setItem("users", JSON.stringify(userRegister));
        }
      }
    }else if(userRegister.length == 0){
      let user = {
        name: nameReg.value,
        email: emailReg.value,
        password: passwordReg.value,
        passwordRepeat:passwordRegRepeat.value
      };
      userRegister.push(user);
      localStorage.setItem("users", JSON.stringify(userRegister));
    }
    setTimeout(() => {
      window.location = "login.html"
    }, 2000);
})

