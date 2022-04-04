const stripe = require('stripe')(process.env.STRIPE_SECRET)
exports.handler = async (event, context) => {
  const products = await stripe.prices.list({
    limit: 10,
  })
  return {
    statusCode: 200,
    body: JSON.stringify(products.data),
  }
}
