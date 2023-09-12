import AsideDoador from '../../components/AsideDoador'

import './style.css'

import imgCard001 from '../../assets/img/img_card_001.png'
import imgCard002 from '../../assets/img/img_card_002.png'
import imgIconeEditar from '../../assets/img/ico_edit.svg'
import imgIconeVisualizar from '../../assets/img/ico_eye.svg'
import imgIconeDeletar from '../../assets/img/ico_delete.svg'


function MinhasDoacoes() {

    function msgExcluirDoacao():void{
        alert('Doação deletada do sistema com sucesso!');
      };

    return (
        <main>
            <h1>página minhas doações ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    <AsideDoador />
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
                                    <div className="cards">
                                        <h4>Celulares antigos</h4>
                                        <img
                                            src={ imgCard001 }
                                            alt="Imagem com sucata de aparelhos celulares gsm"
                                        />
                                        <div className="WrapperCard">
                                            <p>Data de publicação: 30/03/2023</p>
                                            <p>Quantidade de iten(s): 39</p>
                                            <div className="Descriocaocards">
                                                <p>Descrição: </p>
                                                <div>
                                                    <p>5x Celular Samsung A5</p>
                                                    <p>2x Iphone 2 ...</p>
                                                </div>
                                            </div>
                                            <div className="card_Status">
                                                <div className="circle_Status circle_Yellow"></div>
                                                <p>
                                                    <span>Status:</span> Aguardando agendamento com coletor
                                                </p>
                                            </div>
                                            <div className="iconesCards">
                                                <a href="../Tela_Quero_Doar_Parte_2/index.html">
                                                    <img src={ imgIconeEditar } alt="Icone de Editar" />
                                                </a>
                                                <a href="../Tela_Quero_Doar_Parte_2/index.html">
                                                    <img
                                                        src={ imgIconeVisualizar }
                                                        alt="Icone de visualizar"
                                                    />
                                                </a>
                                                <a
                                                    href="../Tela_Quero_Doar_Pt1/index.html"
                                                    onClick={ msgExcluirDoacao }
                                                >
                                                    <img
                                                        src={ imgIconeDeletar }
                                                        alt="Icone de Deletar"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cards">
                                        <h4>Celulares diversos</h4>
                                        <img
                                            src={ imgCard002 }
                                            alt="Imagem com sucata de aparelhos celulares gsm"
                                        />
                                        <div className="WrapperCard">
                                            <p>Data de publicação: 25/03/2023</p>
                                            <p>Quantidade de iten(s): 4</p>
                                            <div className="Descriocaocards">
                                                <p>Descrição: </p>
                                                <div>
                                                    <p>1x Celular Samsung modelo J5 prime</p>
                                                    <p>1x Iphone 4 Plus... ...</p>
                                                </div>
                                            </div>
                                            <div className="card_Status">
                                                <div className="circle_Status circle_Orange"></div>
                                                <p>
                                                    <span>Status:</span> Publicação agendada! 15/05/23 -
                                                    10:00hrs
                                                </p>
                                            </div>
                                            <div className="iconesCards">
                                                <a href="../Tela_Quero_Doar_Parte_2/index.html">
                                                    <img src={ imgIconeEditar } alt="Icone de Editar" />
                                                </a>
                                                <a href="../Tela_Quero_Doar_Parte_2/index.html">
                                                    <img
                                                        src={ imgIconeVisualizar }
                                                        alt="Icone de visualizar"
                                                    />
                                                </a>
                                                <a
                                                    href="../Tela_Quero_Doar_Pt1/index.html"
                                                    onClick={ msgExcluirDoacao }
                                                >
                                                    <img
                                                        src={ imgIconeDeletar }
                                                        alt="Icone de Deletar"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btnVoltar">
                                    <a href="#" onClick={ history.back }>
                                        voltar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default MinhasDoacoes;