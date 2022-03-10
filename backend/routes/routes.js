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

router.get('/signin', (request, response) => {
  signupTemplateCopy.find((error, data) => {
    if(error){
      return response.json(error)
    }else{
      return response.json(data)
    }
  })
})

module.exports = router;