

export const fetchTransactions = async () => {
    try {
        const transactionsReq = await fetch('http://www.mocky.io/v2/5b36325b340000f60cf88903')
        const transactionsData = await transactionsReq.json()
        return transactionsData
    } catch (error) {
        throw new Error(error)
    }

}