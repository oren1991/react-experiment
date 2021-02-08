import styled from "styled-components";

export const FooterNav = styled.div`
    background-color: gray;
    width: 70px;
    justify-content: center;
    text-align: center;
`;

export const Footer = styled.div`
    height: 50px;
    background-color: lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    z-index: 100;
    div {
        flex: 0 1 auto;
    }
`;
