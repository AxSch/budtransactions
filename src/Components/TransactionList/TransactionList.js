import React from 'react'
import Transaction from '../Transaction/Transaction'


const TransactionList = ({ transactions }) => {
    return (
        <div>
            {transactions.map(transaction => {
                return (
                    <Transaction transaction={transaction} />
                )
            })}
        </div>
    )
}

export default TransactionList
