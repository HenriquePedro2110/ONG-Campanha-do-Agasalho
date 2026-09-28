import {
    mostrarInicio,
    mostrarSobre,
    mostrarNossosObjetivos,
    mostrarNossaMissao,
    mostrarInformacoes,
    mostrarContato,
    mostrarProjetos,
    mostrarVoluntarios,
    mostrarCadastro
} from "./views.js";

import {
    configurarCadastro
} from "./cadastro.js";


function carregarCSSCadastro() {
    let cssCadastro = document.getElementById("css-cadastro");

    if (!cssCadastro) {
        cssCadastro = document.createElement("link");

        cssCadastro.id = "css-cadastro";
        cssCadastro.rel = "stylesheet";
        cssCadastro.href = "../CSS/cadastro.css";

        document.head.appendChild(cssCadastro);
    }
}


function removerCSSCadastro() {
    const cssCadastro = document.getElementById("css-cadastro");

    if (cssCadastro) {
        cssCadastro.remove();
    }
}


export function carregarRota() {
    const app = document.getElementById("app");

    if (!app) {
        return;
    }

    const rota = window.location.hash;

    if (rota === "#sobre") {
        removerCSSCadastro();
        app.innerHTML = mostrarSobre();

    } else if (rota === "#missao") {
        removerCSSCadastro();
        app.innerHTML = mostrarNossaMissao();

    } else if (rota === "#objetivos") {
        removerCSSCadastro();
        app.innerHTML = mostrarNossosObjetivos();

    } else if (rota === "#informacoes") {
        removerCSSCadastro();
        app.innerHTML = mostrarInformacoes();

    } else if (rota === "#contato") {
        removerCSSCadastro();
        app.innerHTML = mostrarContato();

    } else if (rota === "#projetos") {
        removerCSSCadastro();
        app.innerHTML = mostrarProjetos();

    } else if (rota === "#voluntarios") {
        removerCSSCadastro();
        app.innerHTML = mostrarVoluntarios();

    } else if (rota === "#cadastro") {
        carregarCSSCadastro();
        app.innerHTML = mostrarCadastro();
        configurarCadastro();

    } else {
        removerCSSCadastro();
        app.innerHTML = mostrarInicio();
    }
}
