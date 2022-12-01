import styled from "styled-components";
import Logo from "./Logo";
import ContainerPerguntas from "./ContainerPerguntas";

export default function Conteudo(){
    return(
        <StyledConteudo>

            <Logo />
            <ContainerPerguntas />

        </StyledConteudo>
    );
}

const StyledConteudo = styled.div`
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`