### Notes

With more time, I would have properly gone about testing the application, having already spent a considerable amount of time on it already. Tests would have included the following with test cases:

* API:
    - Testing the fetchTransactions() returns data as expected
    - Throws an error when an error has be returned by the server

* Transactions
    - Test UI state when a transaction has been selected for removal
    - Test UI state that when isEdit state prop is false, a transaction can't be selected (test the reverse too)
* TransactionList
    - Test UI state when isEdit state prop is true & transactions4Removal state prop has length > 0, then button should be displayed to the user
    - Test that removeTransactions() action has been dispatched when the remove button has been clicked
    - Check that items have been successfully removed from the list

* Design related
   - I also would have liked to spend some time on design as I feel the look & feel of the application can be drastically improved on larger screen sizes. Utilizing more of the available while reducing huge amounts of whitespace.
   - Skeletal loading for the transactions while the user waits for them to load
   - A UI state that displays to the user that there are no more transactions to see once they have all been removed