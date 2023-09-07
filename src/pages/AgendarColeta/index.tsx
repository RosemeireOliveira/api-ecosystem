import './style.css';

import img_card_002 from '../../assets/img/img_card_002.png'
import ico_edit from '../../assets/img/ico_edit.svg';
import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'
import Aside from '../../components/Aside';
import Card from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';



function AgendarColeta() {
    return (
        <main>
            <h1>página agendar coleta ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    {/* <aside>
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
                    </aside> */}

                < Aside />
                    <div className="conteudoPublicacoes">
                        <div className="headerPublicacoes">
                            <h2>Agendar Coleta</h2>
                            <p>Agende aqui a sua retirada do material</p>
                        </div>
                        <div className="containerCard">
                            <div className="card">
                                <div className="cardEsquerda">
                                    <h2>Celulares antigos de diversas marcas e modelos</h2>
                                    <img src="../../img/image 12.png" alt="" />
                                    <p>Agendar Retirada</p>
                                </div>
                                <div className="cardDireita">
                                    <div className="cardDireitaConteudo">
                                        <h2>Dados da Retirada</h2>
                                        <p>Data de publicação 30/03/2023</p>
                                        <p>quandidade de iten(s): 39</p>
                                        <div>
                                            <p>Descrição: </p>
                                            <div>
                                                <p>5x Celular Samsung A5</p>
                                                <p>2x Iphone 2</p>
                                                <p>7x Celular LG 320</p>
                                                <p>3x Tablet Samsung Galaxy Tab 2</p>
                                                <p>...</p>
                                            </div>
                                        </div>
                                        <p>Condição: Para desmontagem/Retirada de peças/p&gt;</p>
                                        <p>
                                            Localização: Av. do Brasil, N° 1000 - apt25/Bloco D - SBC - SP
                                            CEP: 12345-678
                                        </p>
                                        <p>
                                            Disponibilidade de horário para agendamento: Seg - Sex / 09:00
                                            às 14:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBottom">
                                <div className="cardBottomPt1">
                                    <div>
                                        <label>Data:</label>
                                        <textarea defaultValue={""} />
                                    </div>
                                    <div>
                                        <label>Horário</label>
                                        <textarea defaultValue={""} />
                                    </div>
                                </div>
                                <div className="cardBottomPt2">
                                    <label>Observação</label>
                                    <textarea defaultValue={""} />
                                </div>
                            </div>
                            <a href="../Tela_Coletas_Agendadas/index.html">Agendar</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AgendarColeta;