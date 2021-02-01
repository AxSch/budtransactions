import * as ReactRedux from 'react-redux';
import React from 'react'
import TransactionList from './TransactionList'

import renderConnected from '../../utils/renderConnected'

const initialState = {
    isEdit: false,
    userTransactions: {},
    transactionsToRemove: []
}

const mockTransactions = [
    {
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
    },
    {
        id: "13acb877dc4d8030c5dacbde41235433d3496a2ae3c000db4c79hag9c3272baca1a28",
        date: "2018-03-05",
        description: "Wacky Warehouse",
        category: "Entertainment",
        currency: "GBP",
        amount: {
            value: 316,
            currency_iso: "GBP"
        },
        product: {
            id: 4279,
            title: "Lloyds Bank",
            icon: "https://storage.googleapis.com/budcraftstorage/uploads/products/lloyds-bank/Llyods_Favicon-1_161201_091641.jpg"
        }
    },
]
let getByTestId, container

describe('should be display transactions correctly to the user', () => {
    const mockSelector = jest.fn();
    const mockDispatch = jest.fn();
    ReactRedux.useSelector = jest.fn().mockImplementation(() => mockSelector)
    ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch)

    beforeEach(() => {
        const utils = renderConnected(<TransactionList transactions={mockTransactions} />, { initialState });
        getByTestId = utils.getByTestId;
    });

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders successfully', () => {
        expect(getByTestId('transaction-list')).toBeInTheDocument()
        expect(container).toMatchSnapshot();
    });

});