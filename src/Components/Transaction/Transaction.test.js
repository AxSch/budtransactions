import { fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import React from 'react'
import Transaction from './Transaction'

import renderConnected from '../../utils/renderConnected'
import { formatPrice } from '../../utils/formatPrice';

const initialState = {
        isEdit: true,
        userTransactions: {},
        transactionsToRemove: []
}

const mockTransaction = {
    id: "13acb877dc4d8030c5dacbde41235433d3496a2ae3c000db4c793bda9c3228baca1a28",
    date: "2018-03-05",
    description: "Five guys",
    category: "Food / Drink",
    currency: "GBP",
    amount: {
        value: 32,
        currency_iso: "GBP"
    },
    product: {
        id: 4279,
        title: "Lloyds Bank",
        icon: "https://storage.googleapis.com/budcraftstorage/uploads/products/lloyds-bank/Llyods_Favicon-1_161201_091641.jpg"
    }
}
let getByTestId, container

describe('should be display transactions correctly to the user', () => {
    const mockSelector = jest.fn();
    const mockDispatch = jest.fn();
    ReactRedux.useSelector = jest.fn().mockImplementation(() => mockSelector)
    ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch)
    
    beforeEach(() => {
        const utils = renderConnected(<Transaction transaction={mockTransaction} />, { initialState });
        getByTestId = utils.getByTestId;
    });

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders successfully', () => {
        expect(getByTestId('transaction')).toBeInTheDocument()
        expect(container).toMatchSnapshot();
    });

    it('should render the necessary transaction information', () => {
        const transactionIcon = getByTestId('transaction-bank-icon')
        const transactionDesc = getByTestId('transaction-description')
        const transactionCategory = getByTestId('transaction-category')
        const transactionAmount = getByTestId('transaction-amount')
        const mockFormattedPrice = formatPrice(mockTransaction.amount)
        
        expect(transactionIcon).toBeInTheDocument()
        expect(transactionDesc.textContent).toBe(mockTransaction.description)
        expect(transactionCategory.textContent).toBe(mockTransaction.category)
        expect(transactionAmount.textContent).toBe(mockFormattedPrice)
    });

});