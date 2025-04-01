import Container from "@/components/container/page";

export default function Projetos() {
    return (
        <Container>
            <section id="project-section">
                <h2>Projetos</h2>
                <div id="project-box">
                    <button id="previous-project">&lt;</button>
                    <div id="project-list" >
                        <article id="project-1" >
                            <div >
                                <h3>CanhotoAPI</h3>
                                <div>
                                    <p>
                                        O CanhotoApi tem o proposito de facilitar o backup de canhotos de notas fiscais.
                                        Desenvolvido com NodeJs e Express para receber imagens via requisições http e
                                        armazena-las localmente em um servidor enquanto insere os dados em um banco de dados
                                        SQL
                                        Server.
                                    </p>
                                    <p>
                                        Desenvolvido com NodeJs e Express para receber imagens via requisições http e
                                        armazena-las localmente em um servidor enquanto insere os dados em um banco de dados
                                        SQL
                                        Server.
                                    </p>
                                    <p>
                                        A api conta com um Frontend acessado localmente, possibilitando a configuração de
                                        forma
                                        facilitada para o usuário.
                                    </p>
                                    <p>
                                        É possivel realizar controle de usuários criando, editando, deletando e restringindo
                                        acesso em apenas alguns cliques.
                                    </p>

                                </div>
                            </div>
                        </article>
                        <article id="project-2">
                            <div>
                                <h3>AppCanhoto</h3>
                                <div >
                                    <p>
                                        Criado para atuar com o CanhotoApi, permite o backup de canhotos de notas fiscais em
                                        seu servidor e banco de dados.
                                    </p>
                                    <p>
                                        Com ele podemos ler o código de barras de uma nota fiscal, o app fica responsavel de
                                        coletar e tratar as informações do código para o processamento e envio para o
                                        servidor.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <button id="next-project">&gt;</button>
                </div>
            </section>
        </Container>
    )
}