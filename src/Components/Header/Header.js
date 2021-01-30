import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
`

const StyledHeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    @media(min-width: 640px) {
        width: 95%;
    }
`

const StyledHeaderEditCTA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    padding-right:36px;
    > span {
        &:hover {
            color: rgb(0, 204, 68);
        }
    }
    @media(min-width: 640px) {
        padding-right: 40px;
    }
    @media(min-width: 768px) {
        padding-left: 20px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderTitle>
                <h1>Transactions</h1>
            </StyledHeaderTitle>
            <StyledHeaderEditCTA>
                <span>Edit</span>
            </StyledHeaderEditCTA>
        </StyledHeader>
    )
}

export default Header
