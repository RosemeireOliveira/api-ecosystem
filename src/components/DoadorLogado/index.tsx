import './style.css'

import imgUserLogado from '../../assets/img/userLogado.png'
import imgSair from '../../assets/img/exit.png'
import icoMenuDoador from '../../assets/img/Home_menuDoadorICO.svg'
import icoVisualizarDoador from '../../assets/img/Home_Vizualizar_menuDoadorICO.svg'
import icoEditarDoador from '../../assets/img/Home_Edit_menuDoadorICO.svg'
import imgLogout from '../../assets/img/Home_Logout_menuDoadorICO.svg'



function DoadorLogado(){
    
    return(
        <div className="log_doador" id="log_doador1">
  <div className="grupo_login">
    <div id="menu_login2">
      <div id="menu_login_pt1">
        <div>
          <div className="Menu_USER_div_text">
            <img
              id="menu_login_pt1_img"
              src={imgUserLogado}
              alt=""
            />
            <div id="text_Login">
              <h5>Olá Luís,</h5>
              <p>Seja bem vindo!</p>
            </div>
          </div>
          <a href="#" /* onClick= {  abrirFechar2  }*/>
            <img src={ imgSair } alt="" />
          </a>
        </div>
      </div>
      <div id="menu_login_pt2">
        <div>
          <div id="menu_login_pt2_Itens">
            <div>
              <img src={ icoMenuDoador } alt="" />
              <a href="../Tela_Quero_Doar_Pt1/index.html">QUERO DOAR</a>
            </div>
            <div>
              <img src={ icoVisualizarDoador } alt="" />
              <a href="../Tela_Minhas_Doacoes/index.html">
                VIZUALIAR MINHAS DOAÇÕES
              </a>
            </div>
            <div>
              <img src= { icoEditarDoador } alt="" />
              <a href="../Tela_Editar_Perfil_Doador/index.html">
                EDITAR PERFIL
              </a>
            </div>
          </div>
          <div id="menu_login_pt2_Itens2">
            <img src= { imgLogout } alt="" />
            <a href="../Tela_Login_Doador/index.html">SAIR</a>
          </div>
        </div>
      </div>
    </div>
    <div id="menu_notifique2">
      <div id="menu_not_pt1">
        <div>
          <h5>NOTIFICAÇÕES</h5>
          <a href="#" /* onClick={ abrirFecharNote2 }*/>
            <img src={ imgSair } alt="" />
          </a>
        </div>
      </div>
      <div id="menu_not_pt2">
        <section>
          <div>
            <div id="menu_not_pt2_Itens">
              <img src="../../img/img_Notification_001.png" alt="" />
              <div className="conteudo_notifique2">
                <span>Você tem uma nova doação agendada!</span>
                <p>
                  A <strong>ReciclaTudo</strong> tem interesse em seu material
                  publicado, clique no botão abaixo para vizualizar o
                  agendamento e confirmar o horário!
                </p>
                <div className="btn_notifique2">
                  <a href="../Tela_Confirmar_Coleta/index.html">visualisar</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div id="menu_not_pt2_Itens">
              <img src="../../img/img_Notification_002.png" alt="" />
              <div className="conteudo_notifique2">
                <span>Agendamento confirmado</span>
                <p>
                  Você confirmou o horário de agendamento para o dia{" "}
                  <strong>15/05/23 às 10:00hrs</strong> com sucesso. A{" "}
                  <strong>EcoNorte</strong> irá fazer a coleta no dia e horário
                  agendado.
                </p>
                <div className="btn_notifique2">
                  <a href="../Tela_Minhas_Doacoes/index.html">visualisar</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <a href="#" /* onClick={ abrirFechar2 } */>
      <img src="../../img/Home_ico_User.svg" alt="Icone de Logado" />
      <p>Lúis</p>
      <img
        id="seta_BAXIO"
        src="../../img/Home_ico_setaBaixo.svg"
        alt="Icone de Menu pra baixo"
      />
    </a>
  </div>
  <a href="#" /* onClick={ abrirFecharNote2 } */>
    <img src="../../img/Home_ico_notificacao.svg" alt="Icone de Notificação" />
  </a>
</div>

    )
}

export default DoadorLogado;