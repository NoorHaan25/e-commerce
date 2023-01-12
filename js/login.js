let emailLogin = document.getElementById("email-login");
let passwordLogin = document.getElementById("password-login");
let login = document.querySelector(".login")

  let getData =JSON.parse(localStorage.getItem("users"));

login.addEventListener("click" , function(){
  for (let i = 0; i < getData.length; i++) {
    if (getData[i].email==emailLogin.value) {
      setTimeout(() => {
        window.location = "index.html"
      }, 2000);
    }
  }
})