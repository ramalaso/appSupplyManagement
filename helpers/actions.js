const axios = require('axios');

function getSuppliers() {
    axios.get('https://gentle-anchorage-20332.herokuapp.com//api/v1/suppliers')
  .then(function (response) {
    // handle success
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

module.exports = {
    getSuppliers,
}