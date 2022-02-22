const stripe = require('stripe')(
  'sk_test_51KVvuZAIN5fbbozg6DgyiVPBz5n1taOP8iYob99af0rEK2VNv7CbFiyZZyqmMUdruCb6cTPzD1T06aI4GlUF4T0w00n2maLozJ'
)
exports.handler = async (event, context) => {
  const products = await stripe.products.list({
    limit: 3,
  })
  return {
    statusCode: 200,
    body: JSON.stringify(products.data),
  }
}
