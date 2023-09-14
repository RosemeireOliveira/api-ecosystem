import './style.css'
import { Link } from "react-router-dom";


export default function Aside(props:any) {
    return (
        <aside id='AsideColetor'>
            <ul>
                <li className = { props.idSeletor== 1  ?  "contorno" : "" }>
                    {/* <a href="../Tela_Coletas_Agendadas/index.html">coletas agendadas</a> */}
                    <Link to="/coletasagendadas">coletas agendadas</Link>
                </li>
                <li className = { props.idSeletor== 2  ?  "contorno" : "" }>
                    {/* <a href="../Tela_Buscar_Publicacoes/index.html">Buscar por publicações</a> */}
                    <Link to="/buscarpublicacoes">Buscar por publicações</Link>
                </li>
                <li className = { props.idSeletor== 3  ?  "contorno" : "" }>
                    {/* <a href="../Tela_Editar_Perfil_Coletor/index.html">editar perfil</a> */}
                    <Link to="/editarperfilcoletor">editar perfil</Link>
                </li>
            </ul>
        </aside>

    )
}

