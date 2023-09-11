import './style.css'
import img_card_001 from '../../assets/img/img_card_001.png';
import ico_edit from '../../assets/img/ico_edit.svg';
import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'

export default function Card(props:any) {

    return (
        <div className="cards">
            <h4>{ props.tituloCard ? props.tituloCard : "Título" }</h4>
            {/* Arrumar rota de imagem */}
            <img
                src={img_card_001}
                alt="Imagem com sucata de aparelhos celulares gsm"
            />
            <div className="WrapperCard">
                <p>Data de publicação: { props.conteudoCardData ? props.conteudoCardData : "dd/mm/aaaa" } </p>
                <p>Quantidade de iten(s): { props.conteudoCardQuantidade ? props.conteudoCardQuantidade : "x" }</p>
                <p>Responsável: { props.conteudoCardOwner ? props.conteudoCardOwner : "owner" }</p>

                <div className="Descricaocards">
                    <p>Descrição: </p>
                    <div>
                        <p>{ props.quantidadeProduto1 ? props.quantidadeProduto1 : ''} {'x'} { props.descricao1 ? props.descricao1 : "-" }</p>
                        <p>{ props.quantidadeProduto2 ? props.quantidadeProduto2 : ''} {'x'} { props.descricao2 ? props.descricao2 : "-" }</p>
                    </div>
                </div>
                <p>Localização: <strong>{ props.localizacao ? props.localizacao : "localização" }</strong></p>

{/* usar validador abaixo para alterar conforme o status*/}

                <div className="card_Status">
                    <div className="circle_Status circle_Yellow"></div>
                    <p> <span>Status: Aguardando confirmação de horário </span>{" "} </p>
                </div>



{/* Confirmar os direcionamentos abaixo e a forma de exibição */}

                <div className="iconesCards">
                    <a href="../Tela_Agendar_Coleta/index.html">
                        <img src={ico_edit}
                            alt="Icone de Editar" />
                    </a>
                    <a href="../Tela_Agendar_Coleta/index.html">
                        <img
                            src={ico_eye}
                            alt="Icone de visualizar"
                        />
                    </a>

                    <a href="#" >
                    <img
                        src= {ico_delete}
                        alt="Icone de Deletar"
                    />
                </a>
                </div>
            </div>
        </div>
        
    )

}