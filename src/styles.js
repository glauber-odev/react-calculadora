import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 60%;
    min-height: 250px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Columns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`