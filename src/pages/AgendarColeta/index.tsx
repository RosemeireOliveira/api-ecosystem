import './style.css';
import img_card_001 from '../../assets/img/img_card_001.png';
import img_card_002 from '../../assets/img/img_card_002.png'
import ico_edit from '../../assets/img/ico_edit.svg';
import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'


function AgendarColeta() {

    function msgDeletarColeta(){
        alert('A doação foi cancelada! O doador irá ser notificado');
      };

    return (
        <>
            <main>
                <h1>página coletas agendadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <aside>
                            <ul>
                                <li>
                                    <a href="../Tela_Coletas_Agendadas/index.html">coletas agendadas</a>
                                </li>
                                <li>
                                    <a href="../Tela_Buscar_Publicacoes/index.html">
                                        Buscar por publicações
                                    </a>
                                </li>
                                <li>
                                    <a href="../Tela_Editar_Perfil_Coletor/index.html">editar perfil</a>
                                </li>
                            </ul>
                        </aside>
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>coletas agendadas</h2>
                                <p>Visualize o histórico e agendamentos ativos aqui</p>
                            </div>
                            <div>
                                <div className="links_pags">
                                    <a href="../Tela_Coletas_Agendadas/index.html">coletas ativas</a>
                                    <span>|</span>
                                    <a href="../Tela_Coletas_Finalizadas/index.html">
                                        coletas finalizadas
                                    </a>
                                </div>
                                <div className="historic_cards">
                                    <div className="Conteudo_Cards">
                                        <div className="cards">
                                            <h4>Celulares antigos</h4>
                                            <img
                                                src= {img_card_001}
                                                alt="Imagem com sucata de aparelhos celulares gsm"
                                            />
                                            <div className="WrapperCard">
                                                <p>Data de publicação: 30/03/2023</p>
                                                <p>Quantidade de iten(s): 39</p>
                                                <p>Responsável: Luís</p>
                                                <div className="Descriocaocards">
                                                    <p>Descrição: </p>
                                                    <div>
                                                        <p>5x Celular Samsung A5</p>
                                                        <p>2x Iphone 2 ...</p>
                                                    </div>
                                                </div>
                                                <p>
                                                    Localização: <strong>SBC-SP</strong>
                                                </p>
                                                <div className="card_Status">
                                                    <div className="circle_Status circle_Yellow"></div>
                                                    <p>
                                                        <span>Status: Aguardando confirmação de horário </span>{" "}
                                                    </p>
                                                </div>
                                                <div className="iconesCards">
                                                    <a href="../Tela_Agendar_Coleta/index.html">
                                                        <img src={ico_edit}
                                                         alt="Icone de Editar" />
                                                    </a>
                                                    <a href="../Tela_Agendar_Coleta/index.html">
                                                        <img
                                                            src= {ico_eye}
                                                            alt="Icone de visualizar"
                                                        />
                                                    </a>
                                                    <a href="#" onClick={msgDeletarColeta()}>
                                                        <img
                                                            src= {ico_delete}
                                                            alt="Icone de Deletar"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cards">
                                            <h4>Celulares diversos</h4>
                                            <img
                                                src={img_card_002}
                                                alt="Imagem com sucata de aparelhos celulares gsm"
                                            />
                                            <div className="WrapperCard">
                                                <p>Data de publicação: 25/03/2023</p>
                                                <p>Quantidade de iten(s): 4</p>
                                                <p>Responsável: Geraldo</p>
                                                <div className="Descriocaocards">
                                                    <p>Descrição: </p>
                                                    <div>
                                                        <p>1x Celular Samsung modelo J5 prime</p>
                                                        <p>1x Iphone 4 Plus... ...</p>
                                                    </div>
                                                </div>
                                                <p>
                                                    Localização: <strong>Diadema-SP</strong>
                                                </p>
                                                <div className="card_Status">
                                                    <div className="circle_Status circle_Orange"></div>
                                                    <p>
                                                        <span>Status:</span> Publicação agendada! 15/05/23 -
                                                        10:00hrs
                                                    </p>
                                                </div>
                                                <div className="iconesCards">
                                                    <a href="../Tela_Agendar_Coleta/index.html">
                                                        <img src= {ico_edit} alt="Icone de Editar" />
                                                    </a>
                                                    <a href="../Tela_Agendar_Coleta/index.html">
                                                        <img
                                                            src= {ico_eye}
                                                            alt="Icone de visualizar"
                                                        />
                                                    </a>
                                                    <a href="#" onClick= {msgDeletarColeta()}>
                                                        <img
                                                            src= { ico_delete }
                                                            alt="Icone de Deletar"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btnVoltar">
                                        <a href="#" onClick={history.back()}>
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

export default AgendarColeta;