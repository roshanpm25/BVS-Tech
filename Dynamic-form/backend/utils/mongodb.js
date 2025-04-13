// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      type: { type: String, required: true }, // short_answer, paragraph, radio, checkbox, etc.
      label: { type: String, required: true },
      defaultValue: { type: String, default: '' },
      disabled: { type: Boolean, default: true }, // Default to true (disabled by default)
      options: [String], // For radio and checkbox questions
    },
  ],
  disabled: { type: Boolean, default: true }, // If true, form is in preview mode
});

module.exports = mongoose.model('Form', formSchema);
