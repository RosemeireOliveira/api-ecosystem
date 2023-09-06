import './style.css'
import '../../index.css'
import imgCadeado from '../../assets/img/cadeado.png'


function DoacoesFinalizadas() {


    return (
        <>
            <main>
                <h1>página minhas doações finalizadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <aside>
                            <ul>
                                <li>
                                    <a href="../Tela_Quero_Doar_Pt1/index.html">quero doar</a>
                                </li>
                                <li>
                                    <a href="../Tela_Minhas_Doacoes/index.html">
                                        visualizar minhas doações
                                    </a>
                                </li>
                                <li>
                                    <a href="../Tela_Editar_Perfil_Doador/index.html">editar perfil</a>
                                </li>
                            </ul>
                        </aside>
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>minhas doações!</h2>
                                <p>Visualize todas as suas publicações aqui.</p>
                            </div>
                            <div>
                                <div className="links_pags">
                                    <a href="../Tela_Minhas_Doacoes/index.html">doações ativas</a>
                                    <span>|</span>
                                    <a href="../Tela_Doacoes_Finalizadas/index.html">
                                        doações finalizadas
                                    </a>
                                </div>
                                <div className="historic_cards">
                                    <div className="Conteudo_Cards">
                                        <span>Você não possui doações finalizadas no sistema</span>
                                        <img src={imgCadeado} alt="Imagem de cadeado" />
                                    </div>
                                    <div className="btnVoltar">
                                        <a href="#" onClick={history.back}>
                                            voltar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default DoacoesFinalizadas;