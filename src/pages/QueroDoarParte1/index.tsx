import './style.css'
import '../../index.css'
import imgEletronicos from '../../assets/img/img_eletronicos.png'
import imgInformatica from '../../assets/img/img_informatica.png'
import imgLinhaBranca from '../../assets/img/img_linha_branca.png'
import imgBaterias from '../../assets/img/img_baterias_diversas.png'

function QueroDoarParte1() {

    return (
        <>
            <main>
                <h1>página quero doar parte 1 ecosystem &amp; recycle</h1>
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
                                <h2>Quero Doar!</h2>
                                <p className="txt_mensagem">
                                    Aqui você pode selecionar a <br /> categoria do produto que gostaria
                                    de cadastrar.
                                </p>
                            </div>
                            <div>
                                <div className="margem_Conteudo">
                                    <div className="Conteudo">
                                        <div>
                                            <div className="parte_de_cima">
                                                <div className="teste1">
                                                    <p className="p1">Eletroeletrônicos</p>
                                                    <img
                                                        src={imgEletronicos}
                                                        alt="imagem eletrônicos"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="p2">Informática</p>
                                                    <img
                                                        src={imgInformatica}
                                                        alt="imagem infrmatica"
                                                    />
                                                </div>
                                            </div>
                                            <div className="parte_de_baixo">
                                                <div>
                                                    <p className="p3">Linha Branca</p>
                                                    <img
                                                        src={imgLinhaBranca}
                                                        alt="imagem linha branca"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="p4">Baterias Diversas</p>
                                                    <img
                                                        src={imgBaterias}
                                                        alt="imagem baterias diversas"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btnVoltar">
                                            <a
                                                href="../Tela_Quero_Doar_Parte_2/index.html"
                                                className="btn_avancar"
                                            >
                                                Avançar
                                            </a>
                                            <a
                                                href="../Tela_Quero_Doar_Pt1/index.html"
                                                className="btn_cancelar"
                                                onClick={history.back}
                                            >
                                                Cancelar
                                            </a>
                                        </div>
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

export default QueroDoarParte1;