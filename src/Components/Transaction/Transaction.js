import React from 'react'

const Transaction = ({ transaction }) => {
    return (
        <div>
            {transaction.description}
        </div>
    )
}

export default Transaction
