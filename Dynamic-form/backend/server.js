// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./utils/mongodb');  // Import MongoDB connection
// const formRoutes = require('./api/formRoutes'); // Import form routes

// dotenv.config();  // Load environment variables

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/form', formRoutes);  // Register form routes

// // Default route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// app.post('/api/create', (req, res) => {
//   // Handle the form creation logic here
//   // For example, save the form data in a database
//   res.status(201).send({ message: 'Form created successfully' });
// });

// // Backend route to fetch form details by formId
// app.get('/api/form/:formId', async (req, res) => {
//   const { formId } = req.params;
  
//   try {
//     // Fetch the form details from the database or local storage (wherever you saved it)
//     const form = await getFormFromDatabase(formId);  // Example: Replace with actual data fetching logic

//     if (form) {
//       res.status(200).json(form);
//     } else {
//       res.status(404).json({ message: "Form not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching form", error });
//   }
// });


// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/mongodb');  // MongoDB connection
const formRoutes = require('./api/formRoutes'); // Import form routes

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/form', formRoutes);  // Register form routes

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
