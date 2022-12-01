import styled from "styled-components";
import DivPergunta from "./DivPergunta";

export default function ContainerPerguntas(){
    return(
        <StyledContainerPerguntas>
            <DivPergunta />
        </StyledContainerPerguntas>
    );
}

const StyledContainerPerguntas = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`