import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        isEdit: false,
        userTransactions: {},
        transactionsToRemove: []
    },
    reducers: {
        setEdit: (state) => {
            state.isEdit = !state.isEdit
        },
        setTransactions: (state, action) => {
            action.payload.forEach(item => {
                state.userTransactions = {
                    ...state.userTransactions,
                    [item.id]: {
                        ...item
                    }
                }
            })
        },
        markedForRemoval: (state, action) => {
            if (action.payload.toBeRemoved) {
                state.transactionsToRemove.push(action.payload.id)
            } else {
                state.transactionsToRemove = state.transactionsToRemove.filter(item => item !== action.payload.id)
            }
        },
        removeTransactions: (state) => {
            const newUserTransactions = {
                ...state.userTransactions
            }
            state.transactionsToRemove.forEach(transactionId => {
                delete newUserTransactions[transactionId]
            })
            state.userTransactions = newUserTransactions
            state.transactionsToRemove = []
        }
    }
})

export const selectIsEdit = state => state.transactions.isEdit

export const selectUserTransactions = state => state.transactions.userTransactions

export const selectTransactions4Removal = state => state.transactions.transactionsToRemove

export const { setEdit, markedForRemoval, setTransactions, removeTransactions } = transactionsSlice.actions

export default transactionsSlice.reducer
