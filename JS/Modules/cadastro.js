export function configurarCadastro() {
    const form = document.getElementById("form-cadastro");
    const modal = document.getElementById("modal-cadastro");
    const fecharModal = document.getElementById("fechar-modal");
    const alertaValidacao = document.getElementById("alerta-validacao");
    const alertaSucesso = document.getElementById("alerta-sucesso");

    if (!form || !modal || !fecharModal ||
        !alertaValidacao || !alertaSucesso) {
        return;
    }

    const toast = form.querySelector(".toast-limpeza");

    if (!toast) {
        return;
    }

    // forEach: percorre cada opção já criada pelo map() no views.js.
    const opcoesParticipacao = form.querySelectorAll("#participacao option");

    opcoesParticipacao.forEach(function (opcao) {
        opcao.title = opcao.textContent.trim();
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            alertaValidacao.classList.remove("feedback-hidden");
            alertaSucesso.classList.add("feedback-hidden");
            form.reportValidity();
            return;
        }

        alertaValidacao.classList.add("feedback-hidden");
        alertaSucesso.classList.remove("feedback-hidden");

        // Armazena somente informações não sensíveis necessárias para as estatísticas.
        const registrosSalvos = localStorage.getItem("registrosONG");
        const registros = registrosSalvos ? JSON.parse(registrosSalvos) : [];

        registros.push({
            estado: form.elements.estado.value,
            participacao: form.elements.participacao.value
        });

        localStorage.setItem("registrosONG", JSON.stringify(registros));

        modal.classList.add("aberto");
        modal.setAttribute("aria-hidden", "false");
        fecharModal.focus();
    });

    fecharModal.addEventListener("click", function (event) {
        event.preventDefault();

        modal.classList.remove("aberto");
        modal.setAttribute("aria-hidden", "true");
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("aberto");
            modal.setAttribute("aria-hidden", "true");
        }
    });

    form.addEventListener("reset", function () {
        alertaSucesso.classList.add("feedback-hidden");

        setTimeout(function () {
            toast.classList.add("visivel");

            setTimeout(function () {
                toast.classList.remove("visivel");
            }, 2500);
        }, 0);
    });
}
