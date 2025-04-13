const express = require('express');
const Form = require('./form');  // Import the Form model

const router = express.Router();

// POST route to create a new form
router.post('/create', async (req, res) => {
  const { title, questions } = req.body;

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

module.exports = router;
