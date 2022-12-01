import styled from "styled-components";
import play from "../assets/img/seta_play.png";
import cards from "../cards";

export default function DivPergunta(){
    return(
        <>
            {cards.map((c) =>
            <StyledDivPergunta>
                <p>Pergunta {c.number}</p>
                <img src={play} />
            </StyledDivPergunta>)}
        </>

    );
}

const StyledDivPergunta = styled.div`
    width: 300px;
    height: 65px;
    display: flex;
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