// var é uma variavel global
// let é uma variavel local
// const é uma variavel global que tem uma valor fixo e não pode ser alterada

/*
 Para pegar um elemento no html use:

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let img = document.querySelector('#img')

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red' 
    } else {
       txtNome.innerHTML = 'Nome Válido'
       txtNome.style.color = 'green'
       nomeOk = true
    }
 
 }

 function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }
 
 function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 100) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
 }
 
 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }
 
 function imgZoom() {
    img.style.width = '800px'
    img.style.height = '600px'
 }
 
 function imgaNormal() {
    img.style.width = '400px'
    img.style.height = '250px'
 }

