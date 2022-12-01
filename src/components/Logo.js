import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Logo(){
    return(
        <StyledLogo>
            <img src={logo} />
            <p>ZapRecall</p>
        </StyledLogo>
    );
}

const StyledLogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    img{
        width: 60px;
        margin-right: 10px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: white;
        margin-left: 10px;
    }
`