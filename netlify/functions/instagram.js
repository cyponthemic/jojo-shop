// eslint-disable-next-line vue/no-html
const axios = require('axios').default
exports.handler = async (event, context) => {
  const {data} = await axios.get(`https://www.instagram.com/jojosauce_`)

  console.log(data)
  return {body: JSON.stringify(JSON.parse(data.split("window._sharedData = ")[1].split(";</script>")[0]).entry_data.ProfilePage[0].graphql), statusCode: 200}
}
