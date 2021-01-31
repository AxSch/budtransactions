import React from 'react'
import Transaction from '../Transaction/Transaction'


const TransactionList = ({ transactions }) => {
    return (
        <div>
            {Object.values(transactions).map(transaction => {
                return (
                    <Transaction key={transaction.id} transaction={transaction} />
                )
            })}
        </div>
    )
}

export default TransactionList
