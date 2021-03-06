const express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const axios = require('axios');

const verifyjwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://beautify.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://beautify-api-pg/',
  issuer: 'https://beautify.us.auth0.com/',
  algorithms: ['RS256']
});

const verifytoken = async (req) => {
  const accesstoken = req.headers.authorization;
  const response = await axios.get('https://beautify.us.auth0.com/userinfo',{
    headers: {
      authorization: accesstoken
    }
  });
  return response.data;
}

module.exports = {
  verifyjwt,
  verifytoken,
}