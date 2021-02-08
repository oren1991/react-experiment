import styled from "styled-components";
export const Main = styled.main<{ menuActive: boolean }>`
    flex: 1;
    background-color: #e7e7e7;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 200%;
    margin-left: ${(props) => (props.menuActive ? "-50%" : 0)};
    overflow: hidden;
    transition: 0.1s;
`;
