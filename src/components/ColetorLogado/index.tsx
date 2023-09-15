import './style.css'

import imgUserLogado from '../../assets/img/userLogado.png'
import imgSair from '../../assets/img/exit.png'
import icoParceiroColetas from '../../assets/img/Ico_Parceiro_Coletas.svg'
import icoBuscarPubliq from '../../assets/img/Ico_Parceiro_buscar.svg'
import icoEditarParceiro from '../../assets/img/Ico_Parceiro_editar.svg'
import imgLogout from '../../assets/img/Home_Logout_menuDoadorICO.svg'
import imgNotificacao from '../../assets/img/img_Notification_001.png'
import imgNotificacao2 from '../../assets/img/img_Notification_002.png'
import icoLogado from '../../assets/img/Home_ico_User.svg'
import icoSetaBaixo from '../../assets/img/Home_ico_setaBaixo.svg'
import icoNotificacao from '../../assets/img/Home_ico_notificacao.svg'
import { Link } from "react-router-dom";



function ColetorLogado(){
  function abrirFecharNotifiq(){
    let menuNot2 = document.getElementById("menu_notifique2") as HTMLCanvasElement;
    if (window.getComputedStyle(menuNot2).display == 'none'){
        //Mostre o menu
        menuNot2.style.display = "flex";
    }else{
        //Esconde o menu
        menuNot2.style.display = "none";
    }
  };

  function abrirFechar2(){
    let menu2 = document.getElementById("menu_login2") as HTMLCanvasElement;
    if (window.getComputedStyle(menu2).display == 'none'){
        //Mostre o menu
        menu2.style.display = "flex";
    }else{
        //Esconde o menu
        menu2.style.display = "none";    
    }
  };
    
    return(
        <div className="log_doador" id="log_doador1">
  <div className="grupo_login">
    <div id="menu_login2">
      <div id="menu_login_pt1">
        <div>
          <div className="Menu_USER_div_text">
            <img
              id="menu_login_pt1_img"
              src={ imgUserLogado }
              alt="Imagem do usuário Logado"
            />
            <div id="text_Login">
              <h5>Olá ReciclaTudo,</h5>
              <p>Seja bem vindo!</p>
            </div>
          </div>
          <a href="#"  onClick= {  abrirFechar2  }>
            <img src={ imgSair } alt="" />
          </a>
        </div>
      </div>
      <div id="menu_login_pt2">
        <div>
          <div id="menu_login_pt2_Itens">
            <div>
              <img src={ icoParceiroColetas } alt="" />
              {/* <a href="../Tela_Quero_Doar_Pt1/index.html">QUERO DOAR</a> */}
              <Link to="/buscarpublicacoes">QUERO COLETAR</Link>
            </div>
            <div>
              <img src={ icoBuscarPubliq } alt="" />
              {/* <a href="../Tela_Minhas_Doacoes/index.html">
                VIZUALIZAR MINHAS DOAÇÕES
              </a> */}
              <Link to="/minhasdoacoes">VIZUALIZAR MINHAS DOAÇÕES</Link>
            </div>
            <div>
              <img src= { icoEditarParceiro } alt="" />
              {/* <a href="../Tela_Editar_Perfil_Coletor/index.html"> */}
                {/* EDITAR PERFIL */}
              {/* </a> */}
              <Link to="/editarperfilcoletor">EDITAR PERFIL</Link>
            </div>
          </div>
          <div id="menu_login_pt2_Itens2">
            <img src= { imgLogout } alt="" />
            <a href="../Tela_Login_Doador/index.html">SAIR</a> 

            {/* fazer uma validacao caminho logalt indicando caminho */}
            {/* <Link to="/login">SAIR</Link> */}
          </div>
        </div>
      </div>
    </div>
    <div id="menu_notifique2">
      <div id="menu_not_pt1">
        <div>
          <h5>NOTIFICAÇÕES</h5>
          <a href="#"  onClick={ abrirFecharNotifiq } >
            <img src={ imgSair } alt="" />
          </a>
        </div>
      </div>
      <div id="menu_not_pt2">
        <section>
          <div>
            <div id="menu_not_pt2_Itens">
              <img src={ imgNotificacao } alt="" />
              <div className="conteudo_notifique2">
                <span>Agendamento confirmado!</span>
                <p>
                  <strong>Luís</strong> confirmou o horário de agendamento da retirada do material. Compareça no dia <strong>15/05/23 às 10:00hrs.</strong> Clique em vizualizar para mais informações.
                </p>
                <div className="btn_notifique2">
                  {/* <a href="../Tela_Confirmar_Coleta/index.html">visualisar</a> */}
                  <Link to="/coletasagendadas">visualisar</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div id="menu_not_pt2_Itens">
              <img src={ imgNotificacao2 } alt="" />
              <div className="conteudo_notifique2">
              <span>Publicação próximas de você!</span>
              <p>
                <strong>Antônio</strong> postou um material de coleta próximo de você. Aproxidamente 0,7Km. Clique em vizualizar para mais informações.
              </p>
                <div className="btn_notifique2">
                  {/* <a href="../Tela_Minhas_Doacoes/index.html">visualisar</a> */}
                  <Link to="/buscarpublicacoes">visualisar</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <a href="#"  onClick={ abrirFechar2 } >
      <img className="imgLogado" src={ icoLogado } alt="Icone de Logado" />
      <p>ReciclaTudo</p>
      <img
        id="seta_Baixo"
        src={ icoSetaBaixo }
        alt="Icone de Menu pra baixo"
      />
    </a>
  </div>
  <a href="#"  onClick={ abrirFecharNotifiq } >
    <img className="imgNotificacao" src={ icoNotificacao } alt="Icone de Notificação" />
  </a>
</div>

    )
}

export default ColetorLogado;