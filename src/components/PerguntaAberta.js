import styled from "styled-components";
import cards from "../cards";
import virar from "../assets/img/seta_virar.png";

export default function PerguntaAberta(props){
    const {virarPergunta} = props;
    return(
        <>
        {cards.map((c) =>
        <StyledPerguntaAberta key={c.question} mostrar={props.ver}>
            <p>{c.question}</p>
            <img onClick={() => virarPergunta(c.number)} src={virar} />
        </StyledPerguntaAberta>)}
        </>
    );
}

const StyledPerguntaAberta = styled.div`
    width: 300px;
    height: 65px;
    display: ${props => props.mostrar? "flex" : "none"};
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