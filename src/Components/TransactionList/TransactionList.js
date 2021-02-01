import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeTransactions, selectIsEdit, selectTransactions4Removal } from '../../reducers/transactions/transactionsSlice'
import Transaction from '../Transaction/Transaction'

const StyledTransactions = styled.div`
    position: absolute;
    top: 160px;
    width: 100%;
`

const StyledRemoveButton = styled.button`
    background-color: rgb(246, 0, 0);
    padding: 20px;
    border: none;
    width: 100%;
    font-size: 16px;
    color: rgb(255,255,255);
    @media(min-width: 640px) {
        width: 50%;
    }
    @media(min-width: 1024px) {
        width: 40%;
    }
`

const StyledButtonContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: center;
    bottom: 0;
    padding-top: 60px;
    z-index: 4;
`

const TransactionList = ({ transactions }) => {
    const dispatch = useDispatch()
    const isEdit = useSelector(selectIsEdit)
    const transactions4Removal = useSelector(selectTransactions4Removal)

    const removeButton = () => {
        dispatch(removeTransactions())
    }
    return (
        <StyledTransactions data-testid="transaction-list">
            {Object.values(transactions).map(transaction => {
                return (
                    <Transaction key={transaction.id} transaction={transaction} />
                )
            })}
            {isEdit && transactions4Removal.length > 0 ? (
                <StyledButtonContainer>
                    <StyledRemoveButton data-testid="transaction-remove-btn" onClick={() => removeButton()}>
                        Remove
                    </StyledRemoveButton>
                </StyledButtonContainer>
            ) : null}
        </StyledTransactions>
    )
}

export default TransactionList
