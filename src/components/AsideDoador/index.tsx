
import './style.css'

import { Link } from 'react-router-dom';

function AsideDoador(props:any) {
    return (
        <aside id='AsideDoador'>
            <ul>
                <li  className = { props.idSeletor== 1  ?  "contorno" : "" }>
                    {/* <a href="../Tela_Quero_Doar_Pt1/index.html">quero doar</a> */}
                <Link to="/querodoarpt1">quero doar</Link>
                </li>
                <li className = { props.idSeletor== 2  ?  "contorno" : "" }>
                    {/* <a href="../Tela_Minhas_Doacoes/index.html">visualizar minhas doações</a> */}
                    <Link to="/minhasdoacoes">visualizar minhas doações</Link>
                </li>
                <li className = { props.idSeletor== 3  ?  "contorno" : "" }>
                    {/* <a href="../Tela_Editar_Perfil_Doador/index.html">editar perfil</a> */}
                    <Link to="/editarperfildoador">editar perfil</Link>
                </li>
            </ul>
        </aside>

    )
}

export default AsideDoador;