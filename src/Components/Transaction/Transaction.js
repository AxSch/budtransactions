import React, { useEffect, useState } from 'react'
import {
    StyledTransaction,
    StyledTransactionIcon,
    StyledTransactionDetails,
    StyledTransactionDescription,
    StyledTransactionCategory,
    StyledTransactionAmount,
    Overlay
} from './Transaction.styled'
import { markedForRemoval, selectIsEdit } from '../../reducers/transactions/transactionsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../utils/formatPrice'


const Transaction = ({ transaction }) => {
    const [isToBeRemoved, setToBeRemoved] = useState(false)
    const isEdit = useSelector(selectIsEdit)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!isEdit) {
            setToBeRemoved(false)
        }
    }, [isEdit])
    
    const handleRemoval = (transactionId) => {
        if (isEdit) {
            setToBeRemoved(!isToBeRemoved)
            dispatch(markedForRemoval({ id: transactionId, toBeRemoved: !isToBeRemoved }))
        }
    }

    return (
        <>
            <StyledTransaction data-testid="transaction" onClick={() => handleRemoval(transaction.id)} isEdit={isEdit}>
                <Overlay isToBeRemoved={isToBeRemoved} />
                <StyledTransactionIcon data-testid="transaction-bank-icon">
                    <img alt="bank-icon" src={transaction.product.icon} />
                </StyledTransactionIcon>
                <StyledTransactionDetails>
                    <StyledTransactionDescription data-testid="transaction-description" isToBeRemoved={isToBeRemoved}>
                        {transaction.description}
                    </StyledTransactionDescription>
                    <StyledTransactionCategory data-testid="transaction-category" isToBeRemoved={isToBeRemoved}>
                        <span>
                            {transaction.category}
                        </span>
                    </StyledTransactionCategory>
                </StyledTransactionDetails>
                <StyledTransactionAmount data-testid="transaction-amount" isToBeRemoved={isToBeRemoved}>
                    {formatPrice(transaction.amount)}
                </StyledTransactionAmount>
            </StyledTransaction>
        </>
    )
}

export default Transaction
