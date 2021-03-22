const axios = require('axios');

const request = axios.create({
    baseURL: process.env.BACKEND_API || `http://localhost:${process.env.port}`,
});

module.exports = request;
