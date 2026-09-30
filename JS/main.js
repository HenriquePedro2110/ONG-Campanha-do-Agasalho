import { carregarRota } from "./Modules/router.js";


carregarRota();


window.addEventListener(
    "hashchange",
    carregarRota
);


// =====================================================
// MODO ESCURO
// =====================================================

const botaoTema = document.querySelector("#tema-toggle");

const temaSalvo = localStorage.getItem("temaONG");

if (temaSalvo === "escuro") {
    document.body.classList.add("modo-escuro");

    botaoTema.textContent = "☀️ Modo claro";

    botaoTema.setAttribute(
        "aria-label",
        "Ativar modo claro"
    );
}


botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("modo-escuro");

    const modoEscuroAtivo =
        document.body.classList.contains("modo-escuro");


    if (modoEscuroAtivo) {

        localStorage.setItem(
            "temaONG",
            "escuro"
        );

        botaoTema.textContent = "☀️ Modo claro";

        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

    } else {

        localStorage.setItem(
            "temaONG",
            "claro"
        );

        botaoTema.textContent = "🌙 Modo escuro";

        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );
    }

});