import React from 'react'
import currency from 'currency.js'
import { 
    StyledTransaction,
    StyledTransactionIcon,
    StyledTransactionDetails,
    StyledTransactionDescription,
    StyledTransactionCategory,
    StyledTransactionAmount
} from './Transaction.styled'


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
