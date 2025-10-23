// Seleciona todos os botões
const botoes = document.querySelectorAll(".opcao");
const textoResultado = document.getElementById("texto-resultado");

// Adiciona evento de clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        // Remove o destaque de todas as opções
        botoes.forEach(b => b.classList.remove("selecionado"));

        // Adiciona destaque à opção clicada
        botao.classList.add("selecionado");

        // Obtém qual opção foi clicada
        const opcao = botao.getAttribute("data-opcao");

        // Mostra o resultado conforme a opção
        mostrarResultado(opcao);
    });
});

function mostrarResultado(opcao) {
    let resultado;

    switch (opcao) {
        case 'option1':
            resultado = 'Você escolheu melhorar a qualidade de vida. A IA pode ser usada para ajudar no tratamento de doenças e otimizar processos no cotidiano.';
            break;
        case 'option2':
            resultado = 'Você escolheu resolver problemas globais. A IA pode ajudar a combater as mudanças climáticas e melhorar a distribuição de recursos.';
            break;
        case 'option3':
            resultado = 'Você escolheu garantir segurança e ética. A IA pode ser usada para proteger dados e garantir que os sistemas operem de maneira justa.';
            break;
        default:
            resultado = 'Escolha uma alternativa para ver o resultado.';
    }

    textoResultado.textContent = resultado;
}