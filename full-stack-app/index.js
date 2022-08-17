import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { registerValidation } from './validations/auth.js';
import { validationResult } from 'express-validator';
import UserModel from './models/User.js';


mongoose
  .connect('mongodb+srv://admin:admin@cluster0.jhhgpba.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((error) => console.log('DB error', error))

const app = express();

app.use(express.json())

app.post('/auth/registration', registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt)

  const doc = new UserModel({
    email: req.body.email,
    fullName: req.body.fullName,
    passwordHash,
    avatarUrl: req.body.avatarUrl,
  });

  const user = await doc.save();

  res.json(user);

});

app.listen(4444, (error) => {
  if(error) {
    return console.log('error');
  }
  console.log('OK');
});