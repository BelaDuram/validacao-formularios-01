// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");
// ---------- VALIDAÇÃO EMAIL ---------- //
const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("emailLabel");
const emailHelper = document.getElementById("email-helper");
// ---------- VALIDAÇÃO IDADE ---------- //
const idadeInput = document.getElementById("idade");
const idadeLabel = document.getElementById("idadeLabel");
const idadeHelper = document.getElementById("idade-helper");
// ---------- VALIDAÇÃO SENHA ---------- //
const senhaInput = document.getElementById("senha");
const senhaLabel = document.getElementById("senhaLabel");
const senhaHelper = document.getElementById("senha-helper");
// ---------- VALIDAÇÃO CONFIRMA SENHA ---------- //
const confirmaSenhaInput = document.getElementById("confirma-senha");
const confirmaSenhaLabel = document.getElementById("confirma-senha-label");
const confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

// ---------- ADICIONAR E REMOVER POPUP ---------- //
//Forma mais facil de fazer
//Tem que ser na ordem
//MOSTRAR POP-UP DE CAMPO OBRIGATÓRIO 
function togglepopup(input, label){   
    input.addEventListener("click", () =>{
    label.classList.add("required-popup");
    
    });
//OCULTAR POP-UP DE CAMPO OBRIGATÓRIO    
    input.addEventListener("blur", () =>{
    label.classList.remove("required-popup");
    });
    }

//OUTRA FORMA DE FAZER
//focus e click tem o mesmo efeito.
//usernameInput.addEventListener("focus", () =>{
    //usernameLabel.classList.add("required-popup");
    
   // })
// Ocultar popup de campo obrigatório
//usernameInput.addEventListener("blur", () =>{
//usernameLabel.classList.remove("required-popup");

// ---------- VALIDAR VALOR DO INPUT USERNAME---------- //
//Pode usar o change ou input
//value = valor que digitado dentro do input
usernameInput.addEventListener("input", (event) =>{
    const value = event.target.value;

    if(value.length <= 3){
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
    usernameHelper.innerText = "O username precisa ter mais de 3 caracteres";
    usernameHelper.classList.add("visible");
    inputsCorretos.username = false

} else{
 usernameInput.classList.remove("error");
 usernameInput.classList.add("correct");
 usernameHelper.classList.remove("visible");
 inputsCorretos.username = true
}
})
// ---------- CHAMADA DA FUNÇÃO---------- //
togglepopup(usernameInput, usernameLabel)

// ---------- VALIDAR VALOR DO INPUT EMAIL---------- //
emailInput.addEventListener("input", (event) =>{
    const value = event.target.value;
    //Sempre o que ficar por ultimo vai prevalecer
 if(value.includes("@") && value.includes(".com")){
    emailInput.classList.remove("error");
    emailInput.classList.add("correct");
   emailHelper.classList.remove("visible");
   inputsCorretos.email = true
}else{
emailInput.classList.remove("correct");
emailInput.classList.add("error");
emailHelper.innerText = 'O email precisa de um "@" e terminar com ".com".'
emailHelper.classList.add('visible');
inputsCorretos.email = false
}
})
// ---------- CHAMADA DA FUNÇÃO---------- //
togglepopup(emailInput, emailLabel)

// ---------- VALIDAR VALOR DO INPUT IDADE---------- //
idadeInput.addEventListener("input", (event)=>{
    const value = event.target.value;
    if(value < 18){
    idadeInput.classList.remove("correct");
    idadeInput.classList.add("error");
    idadeHelper.innerText = "É necessário ter 18 anos ou mais de idade.";
    idadeHelper.classList.add("visible");
    inputsCorretos.idade = false;
 } else {
 idadeInput.classList.remove("error");
 idadeInput.classList.add("correct");
 idadeHelper.classList.remove("visible");
 inputsCorretos.idade = true;
 }
})
// ---------- CHAMADA DA FUNÇÃO---------- //
togglepopup(idadeInput, idadeLabel)

// ---------- VALIDAÇÃO VALOR DO INPUT SENHA ---------- //
senhaInput.addEventListener("input",(event) =>{
    const value = event.target.value;
    if(value.length <8){
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");
        senhaHelper.innerText = "A senha precisa ter 8 caracteres";
        senhaHelper.classList.add("visible");
        inputsCorretos.senha = false
 } else {
       senhaInput.classList.remove("error");
       senhaInput.classList.add("correct");
       senhaHelper.classList.remove("visible");
       inputsCorretos.senha = true
       
 }
})
// ---------- CHAMADA DA FUNÇÃO---------- //
togglepopup(senhaInput, senhaLabel)

// ---------- VALIDAÇÃO VALOR DO INPUT SENHA ---------- //
confirmaSenhaInput.addEventListener("input", (event) =>{
    const valorConfirmaSenha = event.target.value;

    if(valorConfirmaSenha == senhaInput.value){
        confirmaSenhaInput.classList.remove("error");
        confirmaSenhaInput.classList.add("correct");
        confirmaSenhaHelper.classList.remove("visible");
        inputsCorretos.confirmaSenha = true
        
    }else {
       confirmaSenhaInput.classList.remove("correct");
       confirmaSenhaInput.classList.add("error");
       confirmaSenhaHelper.innerText = "As senhas devem ser idênticas.";
       confirmaSenhaHelper.classList.add("visible");
       inputsCorretos.confirmaSenha = false;
       
 }
})
// ---------- CHAMADA DA FUNÇÃO---------- //
togglepopup(confirmaSenhaInput, confirmaSenhaLabel)

// ---------- EVITAR ENVIO DO FORMULÁRIO---------- //
 let btnSubmit = document.querySelector('button[type="submit"]')
 let inputsCorretos = {
    username: false, 
    email: false,
    senha: false,
    confirmaSenha: false
}
 btnSubmit.addEventListener("click", (event) => {
    if(inputsCorretos.username == false || 
       inputsCorretos.email == false || 
       inputsCorretos.senha == false||
       inputsCorretos.confirmaSenha == false){
     e.preventDefault()
     alert("Os campos obrigatórios precisam ser preenchidos corretamente!");
    }else{
     alert("Formulário enviado com sucesso.");
    }
 })




