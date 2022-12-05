import {useState} from "react";
import styled from "styled-components";
import cards from "../cards";
import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import errado from "../assets/img/icone_erro.png";

export default function PerguntaVirada(props){
    const {setContador, contador} = props;
    const [feito, setFeito] = useState([]);
    const [cor, setCor] = useState(false);

    let estaNaLista;

    function acertou(answer){
        estaNaLista = feito.includes(answer);
        if(!estaNaLista){
            setFeito([...feito, answer]);
            setContador(contador + 1);
            setCor(true);
        }
    }

    function quaseAcertou(answer){
        setCor("y");
    }

    function errou(answer){
        setCor("r");
    }
    
    return(
        <>
            {cards.map((c) =>
            <StyledPerguntaVirada key={c.answer} mostrar={props.mostrar} colorido={cor}>
                <p>{c.answer}</p>
                <div>
                    <img onClick={() => acertou(c.answer)} src={certo} />
                    <img onClick={() =>  quaseAcertou(c.answer)} src={quase} />
                    <img onClick={() => errou(c.answer)} src={errado} />
                </div>
            </StyledPerguntaVirada>)}
        </>
    );
}

const StyledPerguntaVirada = styled.div`
    width: 400px;
    height: 80px;
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
        color:black;
        margin-left: 10px;
    }
    div{
        display: flex;
    }
    img{
        width: 20px;
        height: 23px;
        margin-right: 10px;
    }
`