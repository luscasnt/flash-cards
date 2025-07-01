function criaCartao(Categoria, Pergunta, Resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'

        cartao.innerHTML = `
<div class="cartao_conteudo">
<h3>${Categoria}</h3>
<div class="cartao_conteudo_pergunta">
        <p>${Pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
        <p>${Resposta}</p>
</div>
</div>
`
container.appendChild(cartao)
}