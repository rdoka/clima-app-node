const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA869I0JFuaCUSHzdP3OdYwfdTFZuMDz_4`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng

        // console.log(JSON.stringify(resp.data, undefined, 2));
        // console.log(resp.status);


    }
    // .catch(e => console.log('ERROR!!!!', e));
}

module.exports = {
    getLugarLatLng
}