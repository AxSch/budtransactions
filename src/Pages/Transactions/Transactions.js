import React, { useState, useEffect } from 'react'
import { fetchTransactions } from '../../api/Transactions/transactions'

const Transactions = () => {
    const [transactions, setTransactions] = useState({})
    useEffect(() => {
        const fetchTransactionData = async () => {
            const transactionsData = await fetchTransactions()
            setTransactions(transactionsData.data)
        } 
        fetchTransactionData()
    }, [])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Transactions
