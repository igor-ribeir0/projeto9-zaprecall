import {useState} from "react";
import styled from "styled-components";
import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaVirada from "./PerguntaVirada";

export default function ContainerPerguntas(props){
    const {setContador, contador} = props;
    const [ver, setVer] = useState(false);
    const [revelar, setRevelar] = useState(false);

    function virarPergunta(numero){
        setVer(false);
        setRevelar(true);
    }

    return(
        <StyledContainerPerguntas>
            <PerguntaFechada setVer={setVer}/>
            <PerguntaAberta ver={ver} virarPergunta={virarPergunta}/>
            <PerguntaVirada mostrar={revelar} setContador={setContador} contador={contador}/>
        </StyledContainerPerguntas>
    );
}

const StyledContainerPerguntas = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`