// Parte 1: Alterar Nome

const nomeInput = document.getElementById('nome-input') 
const nomeCartao = document.getElementById('cartao-nome')

nomeInput.addEventListener('input', function() {
    nomeCartao.textContent = nomeInput.value
})

nomeCartao.textContent = nomeInput.value


// Parte 2: Mudar a cor de fundo

const cartao = document.getElementById('cartao')

const botaoAzul = document.getElementById('btn-azul')
const botaoVerde = document.getElementById('btn-verde')

botaoAzul.addEventListener('click', function(){
    botaoVerde.classList.remove('fundo-verde')
    botaoAzul.classList.add('fundo-azul')
})

botaoVerde.addEventListener('click', function(){
    botaoAzul.classList.remove('fundo-azul')
    botaoVerde.classList.add('fundo-verde')
})



