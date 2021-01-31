import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeTransactions, selectIsEdit } from '../../reducers/transactions/transactionsSlice'
import Transaction from '../Transaction/Transaction'

const StyledTransactions = styled.div`
    position: absolute;
    width: 100%;
`

const TransactionList = ({ transactions }) => {
    const dispatch = useDispatch()
    const isEdit = useSelector(selectIsEdit)
    const removeButton = () => {
        dispatch(removeTransactions())
    }
    return (
        <StyledTransactions>
            {Object.values(transactions).map(transaction => {
                return (
                    <Transaction key={transaction.id} transaction={transaction} />
                )
            })}
            {isEdit ? <button onClick={() => removeButton()}>
                Remove
            </button> : null}
        </StyledTransactions>
    )
}

export default TransactionList
