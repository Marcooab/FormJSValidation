const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (e) => {
  e.preventDefault();


  if(nameInput.value === ""){
    alert("Por favor preencha seu nome")
    return
  }

  if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor preencha seu email")
    return
  }


  if(!validatePassword(passwordInput.value, 8)){
    alert("A senha precisa ter no minimo 8 digitos")
  }

  if(jobSelect.value === ""){
    alert("Por favor selecione sua situacao")
  }

  if(messageTextarea === ""){
    alert("POr favor preencha sua mensagem")
  }

  form.submit();
})

function isEmailValid(email){
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )

  if(emailRegex.test(email)){
    return true
  }

  return false
}


function validatePassword(password, minDigits){
  if(password.length >= minDigits){
    return true
  }

  return false
}