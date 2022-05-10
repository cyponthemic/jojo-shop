const stripe = require('stripe')(process.env.STRIPE_SECRET)

exports.handler = async (event, context) => {
  const items = JSON.parse(event.body).items
  const config = JSON.parse(event.body).config
  const total = JSON.parse(event.body).total / 100
  // Only allow POST
  if (event.httpMethod !== 'POST' || items?.length < 1) {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const shippingRateData = [
    {
      min: 0,
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'aud',
        },
        display_name: 'Local Delivery (Inner Melbourne suburbs)',
      },
    },
    {
      min: 50,
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'aud',
        },
        display_name: 'Free Domestic Shipping',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 5,
          },
          maximum: {
            unit: 'business_day',
            value: 7,
          },
        },
      },
    },
    {
      min: 0,
      max: 49,
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 500,
          currency: 'aud',
        },
        display_name: 'Domestic Shipping',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 5,
          },
          maximum: {
            unit: 'business_day',
            value: 7,
          },
        },
      },
    },
    {
      min: 0,
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 1000,
          currency: 'aud',
        },
        display_name: 'Express Domestic Shipping',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 1,
          },
          maximum: {
            unit: 'business_day',
            value: 3,
          },
        },
      },
    },
    {
      min: 0,
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'aud',
        },
        display_name: 'Pickup Footscray',
      },
    },
    {
      min: 0,
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'aud',
        },
        display_name: 'Pickup Abbotsford',
      },
    },
  ]
    .filter((rate) => rate.min < total)
    .filter((rate) => (rate.max || 999) > total)
    .map((rate) => {
      delete rate.min
      delete rate.max
      return rate
    })

  console.log('ship', shippingRateData)

  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: 'payment',
    ...config,
    shipping_address_collection: {
      allowed_countries: ['AU'],
    },
    shipping_options: shippingRateData,
  })

  return {
    statusCode: 200,
    body: session.url,
  }
}
