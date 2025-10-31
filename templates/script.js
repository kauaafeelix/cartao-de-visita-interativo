const nome_input = document.getElementById('nome-input') 
const nome_cartao = document.getElementById('cartao-nome')

nome_input.addEventListener('input', function() {
    nome_cartao.textContent = nome_input.value
})

nome_cartao.textContent = nome_input.value
