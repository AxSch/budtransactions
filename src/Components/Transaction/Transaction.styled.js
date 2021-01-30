import styled from 'styled-components'

export const StyledTransaction = styled.div`
    display: flex;
    padding: 10px;
`

export const StyledTransactionDetails = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.5px solid rgb(233, 233, 233);
`

export const StyledTransactionIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: none;
    padding: 20px;
    > img {
        border: 1px solid rgb(228, 233, 234);
        border-radius: 50%;
        height: 42px;
        width: 42px;
    }
`

export const StyledTransactionAmount = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    justify-content: center;
    padding: 26px;
    border-bottom: 0.5px solid rgb(233, 233, 233);
`

export const StyledTransactionDescription = styled.div`
    font-weight: 500;
    display: flex;
    font-size: 18px;
    padding: 10px 0px;
    color: rgb(0, 0, 0);
`

export const StyledTransactionCategory = styled.div`
    display: flex;
    font-size: 14px;
    color: rgb(134, 134, 136);
    margin-bottom: 10px;
`
