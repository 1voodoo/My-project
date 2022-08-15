import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:admin@cluster0.jhhgpba.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((error) => console.log('DB error', error))

const app = express();

app.use(express.json())

app.post('/auth/registration', (req, res) => {
  
});

app.listen(4444, (error) => {
  if(error) {
    return console.log('error');
  }
  console.log('OK');
});