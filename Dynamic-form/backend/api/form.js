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

// Define the form schema
const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    {
      type: { type: String, required: true },  // 'short_answer', 'radio', etc.
      label: { type: String, required: true },
      options: [String],  // Options for multiple choice questions
      defaultValue: { type: String, default: '' },
      disabled: { type: Boolean, default: true },  // Whether the question is disabled in preview mode
    }
  ],
  disabled: { type: Boolean, default: true },  // If true, form is in preview mode
});

module.exports = mongoose.model('Form', formSchema);  // Export the form model
