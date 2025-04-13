// const mongoose = require('mongoose');

// // Define schema for the form
// const formSchema = new mongoose.Schema({
//   formId: { type: String, required: true, unique: true },
//   title: { type: String, required: true },
//   description: { type: String },
//   questions: [
//     {
//       questionText: String,
//       questionType: String,
//       options: [String], // For multiple choice questions
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// const Form = mongoose.model('Form', formSchema);

// module.exports = Form;
// api/Form.js// Inside your `form.js` or model fileconst mongoose = require('mongoose');
const cors = require('cors');
const { json } = require('express');
const formRoutes = require('./formRoutes');
const connectDB = require('../utils/mongodb');

connectDB();

module.exports = async (req, res) => {
  // Allow CORS and JSON body parsing manually (serverless workaround)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  return formRoutes(req, res); // Delegate routing logic
};

