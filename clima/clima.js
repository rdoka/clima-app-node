const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b6c364ce3b384d02d9b39a67192de0a8`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}