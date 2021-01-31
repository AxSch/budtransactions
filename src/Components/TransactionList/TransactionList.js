import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTransactions, selectIsEdit } from '../../reducers/transactions/transactionsSlice'
import Transaction from '../Transaction/Transaction'


const TransactionList = ({ transactions }) => {
    const dispatch = useDispatch()
    const isEdit = useSelector(selectIsEdit)
    const removeButton = () => {
        dispatch(removeTransactions())
    }
    return (
        <div>
            {Object.values(transactions).map(transaction => {
                return (
                    <Transaction key={transaction.id} transaction={transaction} />
                )
            })}
            {isEdit ? <button onClick={() => removeButton()}>
        Remove
      </button> : null}
        </div>
    )
}

export default TransactionList
