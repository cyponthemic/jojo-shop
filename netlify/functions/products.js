const stripe = require('stripe')(process.env.STRIPE_SECRET)
exports.handler = async (event, context) => {
  const products = await stripe.products.list({
    limit: 10,
  })
  return {
    statusCode: 200,
    body: JSON.stringify(products.data),
  }
}
