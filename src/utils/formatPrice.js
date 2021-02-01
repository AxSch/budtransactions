import currency from 'currency.js'

const gbp = value => currency(value, { symbol: '£' })

export const formatPrice = (priceDetails) => {
    return gbp(priceDetails.value).format()
}
