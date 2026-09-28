export function mostrarInicio() {
    return `
        <section id="inicio">
            <h2>Início</h2>

            <p>
                Bem-vindo ao site da nossa ONG. Nossa missão é
                arrecadar agasalhos, roupas e cobertores para ajudar
                pessoas em situação de vulnerabilidade durante os
                períodos de frio.
            </p>

            <p>
                Aqui você poderá conhecer nossas ações, descobrir
                como realizar uma doação e também saber como se
                tornar um voluntário da nossa campanha.
            </p>

            <img
                src="../images/Unidos_pela_causa.png"
                alt="Voluntários da ONG realizando uma campanha de arrecadação de agasalhos"
                width="400"
                height="400"
            >
        </section>
    `;
}

export function mostrarSobre() {
    return `
        <section id="sobre">
            <h2>Sobre a ONG</h2>

            <p>
                Nossa ONG realiza campanhas de arrecadação de
                agasalhos, roupas e cobertores para serem
                destinados a pessoas e famílias que enfrentam
                dificuldades durante o período de frio.
            </p>

            <h3>Nossa missão</h3>
            <p>
                Promover solidariedade e contribuir para que
                pessoas em situação de vulnerabilidade tenham
                acesso a roupas e agasalhos adequados durante
                os períodos de baixas temperaturas.
            </p>

        </section>
    `;
}


export function mostrarNossosObjetivos() {
    return `
        <section id="objetivos">
            <h2>Nossos Objetivos</h2>
            <p>
                Arrecadar agasalhos e cobertores em boas condições,
                organizar as doações e encaminhá-las para pessoas
                e comunidades que necessitam de apoio.
            </p>
        </section>
    `;
}

export function mostrarNossaMissao() {
    return `
        <section id="missao">
            <h2>Nossa Missão</h2>
            <p>
                Promover solidariedade e contribuir para que
                pessoas em situação de vulnerabilidade tenham
                acesso a roupas e agasalhos adequados durante
                os períodos de baixas temperaturas.
            </p>
        </section>
    `;
}

export function mostrarInformacoes() {
    return `
        <section id="informacoes">
            <h2>Informações</h2>

            <p>
                Nossa campanha recebe doações de agasalhos,
                roupas de frio e cobertores em boas condições
                de uso. As doações são organizadas e destinadas
                às pessoas que mais precisam.
            </p>

            <img
                src="../images/Campanha_do_Agasalho.png"
                alt="Panfleto da campanha do agasalho"
                width="400"
                height="400"
            >

            <h3>Como fazer uma doação</h3>
            <p>
                Separe roupas, agasalhos ou cobertores que estejam
                em boas condições de uso e entre em contato com a
                ONG para saber como realizar a entrega.
            </p>

            <h3>Seja um voluntário</h3>
            <p>
                Você também pode contribuir com seu tempo
                participando da organização, arrecadação e
                distribuição dos agasalhos.
            </p>
        </section>
    `;
}

export function mostrarContato() {
    return `
        <section id="contato">
            <h2>Contato</h2>

            <p>
                Para realizar uma doação, tirar dúvidas ou
                participar como voluntário, entre em contato
                conosco pelos dados abaixo.
            </p>

            <p>
                <strong>Telefone:</strong>
                (11) 99999-9999
            </p>

            <p>
                <strong>E-mail:</strong>
                contato@ongagasalho.com
            </p>

            <img
                src="../images/Cartaz.jpg"
                alt="Imagem de contato"
                width="500"
                height="350"
            >
        </section>
    `;
}

export function mostrarProjetos() {
    return `
        <section id="projetos">
            <h2>Projetos e Ações</h2>

            <p>
                Conheça os projetos e ações realizados pela
                ONG Campanha do Agasalho.
            </p>

            <h3>Campanha de arrecadação</h3>
            <p>
                Arrecadamos agasalhos, roupas de frio e cobertores
                em boas condições para ajudar pessoas durante
                os períodos de baixas temperaturas.
            </p>

            <h3>Organização das doações</h3>
            <p>
                As doações recebidas são organizadas para facilitar
                sua distribuição às pessoas e famílias que precisam.
            </p>

            <h3>Ações voluntárias</h3>
            <p>
                Voluntários podem ajudar nas atividades de arrecadação,
                organização e distribuição dos itens recebidos.
            </p>
        </section>
    `;
}

export function mostrarVoluntarios() {
    const registrosSalvos = localStorage.getItem("registrosONG");
    const registros = registrosSalvos ? JSON.parse(registrosSalvos) : [];

    const totalParticipantes = registros.length;
    const totalDoacoes = registros.filter(function (registro) {
        return registro.participacao === "doacao" ||
               registro.participacao === "ambos";
    }).length;
    const totalVoluntarios = registros.filter(function (registro) {
        return registro.participacao === "voluntariado" ||
               registro.participacao === "ambos";
    }).length;

    const estados = {};

    registros.forEach(function (registro) {
        if (!estados[registro.estado]) {
            estados[registro.estado] = 0;
        }

        estados[registro.estado]++;
    });

    const nomesEstados = {
        AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas",
        BA: "Bahia", CE: "Ceará", DF: "Distrito Federal", ES: "Espírito Santo",
        GO: "Goiás", MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul",
        MG: "Minas Gerais", PA: "Pará", PB: "Paraíba", PR: "Paraná",
        PE: "Pernambuco", PI: "Piauí", RJ: "Rio de Janeiro", RN: "Rio Grande do Norte",
        RS: "Rio Grande do Sul", RO: "Rondônia", RR: "Roraima", SC: "Santa Catarina",
        SP: "São Paulo", SE: "Sergipe", TO: "Tocantins"
    };

    const barrasEstados = Object.keys(estados).map(function (sigla) {
        const quantidade = estados[sigla];
        const porcentagem = totalParticipantes === 0
            ? 0
            : Math.round((quantidade / totalParticipantes) * 100);

        return `
            <div class="barra-estado">
                <div class="barra-estado-cabecalho">
                    <span>${nomesEstados[sigla] || sigla}</span>
                    <strong>${quantidade} (${porcentagem}%)</strong>
                </div>
                <div class="barra-fundo">
                    <div class="barra-preenchida" style="width: ${porcentagem}%"></div>
                </div>
            </div>
        `;
    }).join("");

    return `
        <section id="voluntarios" class="painel-voluntarios">
            <h2>Nossos Voluntários</h2>

            <p>
                Esta página apresenta somente informações agrupadas dos
                cadastros realizados. Nenhum nome, CPF, e-mail, telefone,
                endereço ou mensagem é armazenado para gerar estes números.
            </p>

            <div class="resumo-voluntarios">
                <div class="card-estatistica">
                    <strong>${totalParticipantes}</strong>
                    <span>Participantes cadastrados</span>
                </div>

                <div class="card-estatistica">
                    <strong>${totalDoacoes}</strong>
                    <span>Participações com doação</span>
                </div>

                <div class="card-estatistica">
                    <strong>${totalVoluntarios}</strong>
                    <span>Participações com voluntariado</span>
                </div>
            </div>

            <h3>Participantes por estado</h3>

            <div class="grafico-estados">
                ${barrasEstados || `
                    <p>Ainda não existem cadastros para apresentar no gráfico.</p>
                `}
            </div>
        </section>
    `;
}

export function mostrarCadastro() {

    const formasParticipacao = [
        {
            valor: "doacao",
            texto: "Realizar uma doação"
        },
        {
            valor: "voluntariado",
            texto: "Ser voluntário"
        },
        {
            valor: "ambos",
            texto: "Doação e voluntariado"
        },
        {
            valor: "divulgacao",
            texto: "Ajudar na divulgação"
        },
        {
            valor: "embaixador",
            texto: "Ser embaixador da campanha"
        }
    ];

    // map() transforma cada forma de participação em uma opção HTML.
    const opcoesParticipacao = formasParticipacao.map(function (forma) {
        return `
            <option value="${forma.valor}">
                ${forma.texto}
            </option>
        `;
    }).join("");

    return `
        <section class="status-panel" aria-labelledby="status-titulo">
            <h2 id="status-titulo">Status da campanha</h2>

            <div class="badges" aria-label="Categorias e status">
                <span class="badge badge-ativo">CAMPANHA ATIVA</span>
                <span class="badge badge-doacao">DOAÇÃO</span>
                <span class="badge badge-voluntario">VOLUNTARIADO</span>
            </div>
        </section>

        <section class="alerts" aria-label="Alertas e informações">
            <div class="alert alert-info">
                <strong>Informação:</strong>
                Preencha seus dados para participar das ações da ONG.
            </div>

            <div class="alert alert-warning" id="alerta-validacao">
                <strong>Atenção:</strong>
                Os campos obrigatórios precisam ser preenchidos corretamente.
            </div>

            <div
                class="alert alert-success feedback-hidden"
                id="alerta-sucesso"
                role="status"
            >
                <strong>Sucesso:</strong>
                O formulário foi validado e está pronto para envio.
            </div>
        </section>

        <form id="form-cadastro" action="#" method="post">
            <fieldset>
                <legend>Dados pessoais</legend>

                <p>
                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" required>
                </p>

                <p>
                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        title="Digite o CPF no formato 000.000.000-00"
                        required
                    >
                </p>

                <p>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>
                </p>

                <p>
                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        title="Digite o telefone no formato (11) 99999-9999"
                        required
                    >
                </p>

                <p>
                    <label for="data-nascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="data-nascimento"
                        name="data-nascimento"
                        required
                    >
                </p>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <p>
                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        title="Digite o CEP no formato 00000-000"
                        required
                    >
                </p>

                <p>
                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required>
                </p>

                <p>
                    <label for="numero">Número:</label>
                    <input
                        type="number"
                        id="numero"
                        name="numero"
                        min="1"
                        required
                    >
                </p>

                <p>
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>
                </p>

                <p>
                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado" required>
                        <option value="">Selecione um estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </p>
            </fieldset>

            <fieldset>
                <legend>Forma de participação</legend>

                <p>
                    <label for="participacao">Como deseja participar?</label>
                    <select id="participacao" name="participacao" required>
                        <option value="">Selecione uma opção</option>
                        ${opcoesParticipacao}
                    </select>
                </p>

                <p>
                    <label for="mensagem">Informações adicionais:</label>
                </p>

                <p>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        cols="40"
                        placeholder="Digite uma mensagem, dúvida ou informação adicional."
                    ></textarea>
                </p>
            </fieldset>

            <p class="acoes-formulario">
                <button type="submit">Realizar cadastro</button>

                <span class="botao-limpar">
                    <button type="reset">Limpar formulário</button>

                    <span class="toast-limpeza" role="status">
                        Formulário limpo com sucesso.
                    </span>
                </span>
            </p>
        </form>

        <div
            class="modal"
            id="modal-cadastro"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            aria-hidden="true"
        >
            <div class="modal-conteudo">
                <h2 id="modal-titulo">Cadastro enviado!</h2>

                <p>
                    Seus dados foram validados e o cadastro
                    foi registrado com sucesso.
                </p>

                <a
                    href="#"
                    class="botao-modal"
                    id="fechar-modal"
                >
                    Fechar
                </a>
            </div>
        </div>
    `;
}
