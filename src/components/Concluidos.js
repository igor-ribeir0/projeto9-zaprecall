import styled from "styled-components";

export default function Concluidos(props){
    const {contador} = props
    return(
        <StyledContainerConcluidos>
            <span>{contador}/8 CONCLUÍDOS</span>
        </StyledContainerConcluidos>
    );
}

const StyledContainerConcluidos = styled.div`
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    span{
        width: 145px;
        height: 22px;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        color: #333333;
        white-space: nowrap;
    }
`