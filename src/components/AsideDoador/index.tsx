
import './style.css'

function AsideDoador(props:any) {
    return (
        <aside id='AsideDoador'>
            <ul>
                <li  className = { props.idSeletor== 1  ?  "contorno" : "" }>
                    <a href="../Tela_Quero_Doar_Pt1/index.html">quero doar</a>
                </li>
                <li className = { props.idSeletor== 2  ?  "contorno" : "" }>
                    <a href="../Tela_Minhas_Doacoes/index.html">visualizar minhas doações</a>
                </li>
                <li className = { props.idSeletor== 3  ?  "contorno" : "" }>
                    <a href="../Tela_Editar_Perfil_Doador/index.html">editar perfil</a>
                </li>
            </ul>
        </aside>

    )
}

export default AsideDoador;