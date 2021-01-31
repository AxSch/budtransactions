import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsEdit, setEdit } from '../../reducers/transactions/transactionsSlice'
import {
    StyledHeader,
    StyledHeaderTitle,
    StyledHeaderEditCTA,
    StyledHeaderEditButton
} from './Header.styled'

const Header = () => {
    const isEdit = useSelector(selectIsEdit)
    const dispatch = useDispatch()
    const setIsEdit = () => {
        dispatch(setEdit())
    }
    return (
        <StyledHeader>
            <StyledHeaderTitle>
                <h1>Transactions</h1>
            </StyledHeaderTitle>
            <StyledHeaderEditCTA>
                <StyledHeaderEditButton onClick={() => setIsEdit()}>
                    {isEdit ? 'Done' : 'Edit'}
                </StyledHeaderEditButton>
            </StyledHeaderEditCTA>
        </StyledHeader>
    )
}

export default Header
