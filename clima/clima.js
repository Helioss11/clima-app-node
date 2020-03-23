const axios = require('axios');

const getclima = async (lat, lng) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=01d3ec304a6b63a4d5272069a29392ec&units=metric`);
  return resp.data.main.temp;

}

module.exports = {
  getclima
}