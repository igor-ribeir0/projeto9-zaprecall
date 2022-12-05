import {useState} from "react";
import styled from "styled-components";
import play from "../assets/img/seta_play.png";
import cards from "../cards";

export default function DivPergunta(props){
    const {setVer} = props
    const [esconder, setEsconder] = useState(false);
    const [perguntaEscolhida, setPerguntaEscolhida] = useState([]);

    function iniciarPergunta(numero){
        const estaNaLista = perguntaEscolhida.includes(numero);
        if(!estaNaLista){
            setPerguntaEscolhida([...perguntaEscolhida, numero]);
            setEsconder(true);
            setVer(true); 
        } 
    }

    return(
        <>
            {cards.map((c) =>
            <StyledPerguntaFechada  key={c.number} mostrar={esconder}>
                <p>Pergunta {c.number}</p>
                <img onClick={() => iniciarPergunta(c.number)} src={play} />
            </StyledPerguntaFechada>)}
        </>

    );
}

const StyledPerguntaFechada = styled.div`
    width: 300px;
    height: 65px;
    display: ${props => props.mostrar? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-top: 5px;
    margin-bottom: 15px;
    p{
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: black;
        margin-left: 10px;
    }
    img{
        width: 20px;
        height: 23px;
        margin-right: 10px;
    }
`