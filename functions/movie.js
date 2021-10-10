require('dotenv').config()
const axios = require('axios')
const { API_ENDPOINT, API_KEY } = process.env

exports.handler = async function (event) {
  const options = JSON.parse(event.body)
  const { title, id, type} = options;
  let param = type === 'movies' ? `&s=${title}` : `&i=${id}&plot=short`; 
  const { data } = await axios({
    url: `${API_ENDPOINT}?apikey=${API_KEY}${param}`,
    method: 'GET',
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
