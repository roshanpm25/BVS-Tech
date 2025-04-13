// const express = require('express');
// const router = express.Router();
// const formController =  require('./formControl');  // Use relative path with './' instead of absolute path


// // Routes
// router.post('/create', formController.createForm);
// router.get('/form/:formId', formController.getFormById);

// module.exports = router;
// api/formRoutes.js


// api/formRoutes.jsconst Form = require('./form');

// Router-like handler
const express = require('express');
const Form = require('../api/form');  // Import the Form model
const router = express.Router();

// POST route to create a new form
router.post('/create', async (req, res) => {
  const { title, description, questions } = req.body;  // Extract data from the request body
  const formId = Date.now().toString();  // Create a unique form ID based on timestamp

  try {
    const newForm = new Form({
      title,
      description,
      questions,
      formId,
    });

    // Save the form in the database
    await newForm.save();

    // Respond with success and formId
    res.status(201).json({ message: 'Form created successfully', formId });
  } catch (err) {
    // Handle any errors during form creation
    res.status(500).json({ message: 'Error creating form', error: err });
  }
});

// GET route to retrieve a form by formId
router.get('/:formId', async (req, res) => {
  const { formId } = req.params;  // Extract the formId from the URL parameters

  try {
    // Find the form by formId in the database
    const form = await Form.findOne({ formId });

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });  // Return 404 if the form doesn't exist
    }

    // Respond with the form data
    res.status(200).json(form);
  } catch (err) {
    // Handle any errors during form retrieval
    res.status(500).json({ message: 'Error fetching form', error: err });
  }
});

module.exports = router;  // Export the router to be used in the server
