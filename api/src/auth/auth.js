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
        jwksUri: 'https://dev-la4nkwuq.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://beautify-api',
  issuer: 'https://dev-la4nkwuq.us.auth0.com/',
  algorithms: ['RS256']
});


module.exports = verifyjwt
