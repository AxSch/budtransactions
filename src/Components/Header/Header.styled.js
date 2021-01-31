import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
`

export const StyledHeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    @media(min-width: 640px) {
        width: 95%;
    }
`

export const StyledHeaderEditCTA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:;
    @media(min-width: 640px) {
        padding-right: 40px;
    }
    @media(min-width: 768px) {
        padding-left: 20px;
        width: 5%;
        align-items: end;
    }
`

export const StyledHeaderEditButton = styled.button`
    color: rgb(255,255,255);
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    text-decoration: none;
    border: none;
    background-color: rgb(0,0,0);
    &:hover {
        color: rgb(0, 204, 68);
    }
`
