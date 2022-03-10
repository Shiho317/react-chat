const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../models/SignupModels')

router.post('/signup', (request, response) => {
  const signedupUser = new signupTemplateCopy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
    image: request.body.image,
  })
  signedupUser.save()
  .then(data => {
    response.json(data);
  })
  .catch(error => {
    response.json(error)
  })
})

module.exports = router;