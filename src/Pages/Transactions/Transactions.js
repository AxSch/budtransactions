import React, { useState, useEffect } from 'react'
import { fetchTransactions } from '../../api/Transactions/transactions'
import TransactionList from '../../Components/TransactionList/TransactionList'

const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        const fetchTransactionData = async () => {
            const transactionsData = await fetchTransactions()
            setTransactions(transactionsData.data)
        } 
        fetchTransactionData()
    }, [])
    return (
        <div>
            {transactions.length > 0 ? <TransactionList transactions={transactions} /> : 'Loading...'}
        </div>
    )
}

export default Transactions
