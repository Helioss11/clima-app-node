const axios = require('axios');

const getLugarLatLng = async (dir) => {

  const encodedURL = encodeURI(dir);
  console.log(encodedURL);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: { 'x-rapidapi-key': 'c5a5f64b17msh8b3284b4d399058p1bcf48jsn5b228d259bd0' }
  });

  const resp = await instance.get();

  if(resp.data.Results.length === 0){
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  }

}

module.exports = {
  getLugarLatLng
}