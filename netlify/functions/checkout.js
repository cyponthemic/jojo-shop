const stripe = require('stripe')(
  'sk_test_51KVvuZAIN5fbbozg6DgyiVPBz5n1taOP8iYob99af0rEK2VNv7CbFiyZZyqmMUdruCb6cTPzD1T06aI4GlUF4T0w00n2maLozJ'
)
exports.handler = async (event, context) => {
  const items = JSON.parse(event.body).items
  const config = JSON.parse(event.body).config
  // Only allow POST
  if (event.httpMethod !== 'POST' || items?.length < 1) {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: 'payment',
    ...config,
  })

  return {
    statusCode: 200,
    body: session.url,
  }
}
