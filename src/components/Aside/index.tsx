import './style.css'
import { Link } from "react-router-dom";


export default function Aside() {
    return (
        <aside id='AsideColetor'>
            <ul>
                <li>
                    {/* <a href="../Tela_Coletas_Agendadas/index.html">coletas agendadas</a> */}
                    <Link to="/coletasagendadas">coletas agendadas</Link>
                </li>
                <li>
                    {/* <a href="../Tela_Buscar_Publicacoes/index.html">Buscar por publicações</a> */}
                    <Link to="/buscarpublicacoes">Buscar por publicações</Link>
                </li>
                <li>
                    {/* <a href="../Tela_Editar_Perfil_Coletor/index.html">editar perfil</a> */}
                    <Link to="/editarperfilcoletor">editar perfil</Link>
                </li>
            </ul>
        </aside>

    )
}

