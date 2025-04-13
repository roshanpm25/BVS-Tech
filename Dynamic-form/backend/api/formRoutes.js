// const express = require('express');
// const router = express.Router();
// const formController =  require('./formControl');  // Use relative path with './' instead of absolute path


// // Routes
// router.post('/create', formController.createForm);
// router.get('/form/:formId', formController.getFormById);

// module.exports = router;
// api/formRoutes.js
const express = require('express');
const Form = require('./form');  // Import the Form model from the same folder

const router = express.Router();

// POST route to create a new form
router.post('/create', async (req, res) => {
  const { title, questions } = req.body;  // Assuming form data comes in the request body

  try {
    const newForm = new Form({
      title,
      questions,
    });

    await newForm.save();
    res.status(201).json({ message: 'Form created successfully', form: newForm });
  } catch (error) {
    res.status(500).json({ message: 'Error creating form', error });
  }
});

// GET route to fetch a form by formId
router.get('/:formId', async (req, res) => {
  const { formId } = req.params;

  try {
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching form', error });
  }
});

module.exports = router;
