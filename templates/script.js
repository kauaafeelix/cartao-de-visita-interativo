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

// Parte 3: Altera fonte

const botaoFonte = document.getElementById('btn-fonte')

botaoFonte.addEventListener('click', function(){
    cartao.classList.toggle('fonte-alternativa')
})


const selectImagem = document.getElementById('imagem-select')
const imagemCartao = document.getElementById('cartao-img')

selectImagem.addEventListener('change', () =>{
    const novoIcone = selectImagem.value
    imagemCartao.setAttribute('src', novoIcone)
})


