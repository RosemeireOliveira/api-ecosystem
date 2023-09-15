import './style.css';

import img_card_002 from '../../assets/img/img_card_002.png'
import ico_edit from '../../assets/img/ico_edit.svg';
import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'
import Aside from '../../components/Aside';
import Card from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';



function AgendarColeta() {

    let navigate = useNavigate()

    function click() {
        navigate('/home')
    }

    function msgDeletarColeta() {
        alert('A doação foi cancelada! O doador irá ser notificado');
    };

    return (
        <>
            <main>
                <h1>página coletas agendadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        {/* Abaixo está sendo chamado o  componente aside */}
                        <Aside idSeletor={1} />

                        <div className="menu_Direito">
                            <div className="title">
                                <h2>coletas agendadas</h2>
                                <p>Visualize o histórico e agendamentos ativos aqui</p>
                            </div>
                            <div>
                                <div className="links_pags">
                                    {/* <a href="../Tela_Coletas_Agendadas/index.html">coletas ativas</a> */}
                                    <Link to="/coletasagendadas">coletas ativas</Link>

                                    <span>|</span>

                                    {/* <a href="../Tela_Coletas_Finalizadas/index.html">
                                        coletas finalizadas
                                    </a> */}
                                    <Link to="/coletasfinalizadas">coletas finalizadas</Link>


                                </div>
                                <div className="historic_cards">
                                    <div className="Conteudo_Cards">

                                        {/* Importação do Card */}
                                        <Card
                                            tituloCard='Celulares antigos'
                                            conteudoCardData='30/03/2023'
                                            conteudoCardQuantidade='3'
                                            conteudoCardOwner='Luís'
                                            quantidadeProduto1='5'
                                            descricao1='Celular Samsung A5'
                                            quantidadeProduto2='2'
                                            descricao2='Iphone 2'
                                            localizacao='SBC-SP'
                                        />
                                        <Card
                                            tituloCard='Celulares novos'
                                            conteudoCardData='30/03/2023'
                                            conteudoCardQuantidade='3'
                                            conteudoCardOwner='Luís'
                                            quantidadeProduto1='5'
                                            descricao1='Celular Samsung A5'
                                            quantidadeProduto2='2'
                                            descricao2='Iphone 2'
                                            localizacao='SBC-SP' />
                                        <Card />

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
                                                        <img src={ico_edit} alt="Icone de Editar" />
                                                    </a>
                                                    <a href="../Tela_Agendar_Coleta/index.html">
                                                        <img
                                                            src={ico_eye}
                                                            alt="Icone de visualizar"
                                                        />
                                                    </a>
                                                    {/* <a href="#" onClick= {msgDeletarColeta()}>
                                                        <img
                                                            src= { ico_delete }
                                                            alt="Icone de Deletar"
                                                        />
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="btnVoltar">
                                        <Link to ={ click() }>voltar</Link>
                                    </div> */}
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