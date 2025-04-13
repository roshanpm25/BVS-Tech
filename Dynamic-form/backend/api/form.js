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

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
  title: String,
  description: String,
  questions: Array,
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema); // Check if model exists first

module.exports = Form;
