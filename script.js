const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");]0-=
const pergunta = [
{
enunciado: 
"1. Você acredita que um dia será possível se apaixonar por uma IA como por uma pessoa real.
   alternativa["sim!" , "não!"     ] 
},
{
    enunciado: 
    "2. Você deixaria uma IA tomar decisões médicas críticas sobre a sua saúde?"
alternativa: ["sim!" ,"não!"]
},
{
enunciado:
"1. Acredita que governos vão usar a IA mais para controle social do que para o bem comum?"
alternativa:["sim!" , "não!"]
},
{
    enunciado:
    "4. Você confiaria em uma IA para educar seus filhos no lugar de um professor humano?"
alternativa:["sim!" , "não!"]
}
{
enunciado:
"5.Você acha que a IA pode desenvolver uma consciência própria?"
alternativa:["sim!" , "não!"]
}
]:root {
    --cor-fundo: #020e1b;
    --cor-principal:#0B0D20;
    --cor-secundaria: #3BDEFD;
    --cor-destaque:#2BDEFD;
    --cor-texto: #0b7d91;
}

body {
    background-color: var(--cor-fundo);
color: var(--cor-texto);
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
}

.caixa-principal{
    background-color: var(--cor-principal);
    width: 90%;
    text-align: center;
    padding: 20px;
}

h1{
    color: var(--cor-destaque);

}

 button {
background-color: var(--cor-secundaria);
color: var(--cor-texto);
border: none;
border-radius: 15px;
padding: 15px;
transition: background-color 0.3s;
}

button:hover{
    background-color: var(--cor-destaque);
    color: var(--cor-principal);
}