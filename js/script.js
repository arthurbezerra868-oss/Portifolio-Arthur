// ATUALIZA AUTOMATICAMENTE O ANO DO RODAPÉ
const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// BOTÃO DE ALTERNÂNCIA DE TEMA
const botaoTema = document.getElementById("botaoTema");
const iconeTema = document.getElementById("iconeTema");
const textoTema = document.getElementById("textoTema");

// VERIFICA O TEMA SALVO
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
    document.body.classList.add("claro");
}

// ATUALIZA O TEXTO E O ÍCONE DO BOTÃO
function atualizarBotaoTema() {

    if (!iconeTema || !textoTema) return;

    if (document.body.classList.contains("claro")) {
        iconeTema.textContent = "🌙";
        textoTema.textContent = "Modo escuro";
    } else {
        iconeTema.textContent = "☀️";
        textoTema.textContent = "Modo claro";
    }
}

// ATUALIZA AO CARREGAR A PÁGINA
atualizarBotaoTema();

// ALTERNAR TEMA AO CLICAR
if (botaoTema) {

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("claro");

        // SALVA A PREFERÊNCIA
        if (document.body.classList.contains("claro")) {
            localStorage.setItem("tema", "claro");
        } else {
            localStorage.setItem("tema", "escuro");
        }

        // ATUALIZA O BOTÃO
        atualizarBotaoTema();
    });
}
