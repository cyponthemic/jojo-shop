const stripe = require('stripe')(
  'sk_test_51KVvuZAIN5fbbozg6DgyiVPBz5n1taOP8iYob99af0rEK2VNv7CbFiyZZyqmMUdruCb6cTPzD1T06aI4GlUF4T0w00n2maLozJ'
)
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  })

  return {
    statusCode: 200,
    body: session.url,
  }
}
