import React from 'react'
import styled from 'styled-components'
import currency from 'currency.js'


const StyledTransaction = styled.div`
    display: flex;
    padding: 10px;
`

const StyledTransactionDetails = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.5px solid rgb(233, 233, 233);
`

const StyledTransactionIcon = styled.div`
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

const StyledTransactionAmount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 26px;
    border-bottom: 0.5px solid rgb(233, 233, 233);
`

const StyledTransactionDescription = styled.div`
    display: flex;
    font-size: 18px;
    padding: 10px 0px;
    color: rgb(0, 0, 0);
`

const StyledTransactionCategory = styled.div`
    display: flex;
    font-size: 14px;
    color: rgb(134, 134, 136);
    margin-bottom: 10px;
`

const Transaction = ({ transaction }) => {
    const formatPrice = (priceDetails) => {
        const gbp = value => currency(value, { symbol: '£' })
        return (
            <>
            {gbp(priceDetails.value).format()}
            </>
        )
    }
    return (
        <StyledTransaction>
            <StyledTransactionIcon>
                <img alt="bank-icon" src={transaction.product.icon} />
            </StyledTransactionIcon>
            <StyledTransactionDetails>
                <StyledTransactionDescription>
                    {transaction.description}
                </StyledTransactionDescription>
                <StyledTransactionCategory>
                    <span>
                        {transaction.category}
                    </span>
                </StyledTransactionCategory>
            </StyledTransactionDetails>
            <StyledTransactionAmount>
                {formatPrice(transaction.amount)}
            </StyledTransactionAmount>
        </StyledTransaction>
    )
}

export default Transaction
