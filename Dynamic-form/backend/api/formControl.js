const Form = require('./form');  // Use relative path with './' instead of absolute path

// Create a new form
exports.createForm = async (req, res) => {
  const { title, description, questions } = req.body;
  const formId = Date.now().toString(); // Unique form ID

  const form = new Form({
    title,
    description,
    questions,
    formId,
  });

  try {
    await form.save();
    res.status(201).json({ message: 'Form created successfully', formId });
  } catch (err) {
    res.status(500).json({ message: 'Error creating form', error: err });
  }
};

// Get form by formId
exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findOne({ formId: req.params.formId });
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving form', error: err });
  }
};
