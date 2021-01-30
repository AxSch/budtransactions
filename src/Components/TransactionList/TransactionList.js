import React from 'react'


const TransactionList = ({ transactions }) => {
    return (
        <div>
            {transactions.map(transaction => {
                return (
                    <div key={transaction.id}>
                        {transaction.description}
                    </div>
                )
            })}
        </div>
    )
}

export default TransactionList
