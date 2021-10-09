require('dotenv').config()
const axios = require('axios')
const { API_ENDPOINT, API_KEY } = process.env

exports.handler = async function (event) {
  const options = JSON.parse(event.body)
  const { title='' } = options
  const { data } = await axios({
    url: `${API_ENDPOINT}?apikey=${API_KEY}&s=${title}`,
    method: 'GET',
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
