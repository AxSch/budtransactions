import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        isEdit: false,
        transactions: []
    },
    reducers: {
        setEdit: (state) => {
            state.isEdit = !state.isEdit
            console.log(state.isEdit)
        },
    }
})

export const selectIsEdit = state => state.transactions.isEdit

export const { setEdit } = transactionsSlice.actions

export default transactionsSlice.reducer
