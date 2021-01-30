import React from 'react'


const TransactionList = ({ transactions }) => {
    return (
        <div>
            {transactions.map(transaction => {
                <div>{transaction.name}</div>
            })}
        </div>
    )
}

export default TransactionList
