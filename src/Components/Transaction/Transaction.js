import React, { useState } from 'react'
import currency from 'currency.js'
import { 
    StyledTransaction,
    StyledTransactionIcon,
    StyledTransactionDetails,
    StyledTransactionDescription,
    StyledTransactionCategory,
    StyledTransactionAmount
} from './Transaction.styled'
import { markedForRemoval, selectIsEdit } from '../../reducers/transactions/transactionsSlice'
import { useDispatch, useSelector } from 'react-redux'


const Transaction = ({ transaction }) => {
    const [isToBeRemoved, setToBeRemoved] = useState(false)
    const isEdit = useSelector(selectIsEdit)
    const dispatch = useDispatch()
    const formatPrice = (priceDetails) => {
        const gbp = value => currency(value, { symbol: '£' })
        return (
            <>
                {gbp(priceDetails.value).format()}
            </>
        )
    }
    const handleRemoval = (transactionId) => {
        if(isEdit) {
            setToBeRemoved(!isToBeRemoved)
            dispatch(markedForRemoval({id: transactionId, toBeRemoved:!isToBeRemoved}))
        }
    }

    return (
        <StyledTransaction onClick={() => handleRemoval(transaction.id)} isToBeRemoved={isToBeRemoved}>
            <StyledTransactionIcon isToBeRemoved={isToBeRemoved}>
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
