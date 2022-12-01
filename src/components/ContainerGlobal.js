import styled from "styled-components";
import Conteudo from "./Conteudo";
import Concluidos from "./Concluidos";

export default function ContainerGlobal(){
    return(
        <StyledContainerGlobal>

            <StyledMain>
                <Conteudo />
                <Concluidos />
            </StyledMain>

        </StyledContainerGlobal>
    );
}

const StyledContainerGlobal = styled.div`
    height: 100vh;
    background-color: #FB6B6B;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`