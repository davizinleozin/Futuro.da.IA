/* Resetando margens e fontes */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.caixa-principal {
    background-color: var(--cor-principal);
    width: 90%;
    max-width: 400px;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
    color: var(--cor-destaque);
    margin-bottom: 20px;
}

button {
    background-color: var(--cor-secundaria);
    color: var(--cor-texto);
    border: none;
    border-radius: 15px;
    padding: 15px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    width: 100%;
}

button:hover {
    background-color: var(--cor-destaque);
    color: var(--cor-principal);
}

.caixa-resultado p {
    font-size: 16px;
    font-weight: bold;
    color: var(--cor-texto);
    margin-top: 20px;
}
