const stripe = require('stripe')(process.env.STRIPE_SECRET)
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
