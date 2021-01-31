import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions } from '../../api/Transactions/transactions'
import TransactionList from '../../Components/TransactionList/TransactionList'
import { setTransactions, selectUserTransactions } from '../../reducers/transactions/transactionsSlice'

const Transactions = () => {
    const dispatch = useDispatch()
    const userTransactions = useSelector(selectUserTransactions) 
    useEffect(() => {
        const fetchTransactionData = async () => {
            const transactionsData = await fetchTransactions()
            dispatch(setTransactions(transactionsData.data))
        } 
        fetchTransactionData()
    }, [dispatch])
    return (
        <>
            {Object.keys(userTransactions).length > 0 ? <TransactionList transactions={userTransactions} /> : 'Loading...'}
        </>
    )
}

export default Transactions
