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
module.exports = async (req, res) => {
    const { method, url } = req;
  
    if (method === 'POST' && url === '/api/form/create') {
        const { title, questions } = req.body;
        try {
            const newForm = new Form({ title, questions });
            await newForm.save();
            return res.status(201).json({ message: 'Form created', form: newForm });
        } catch (err) {
            return res.status(500).json({ message: 'Error creating form', error: err });
        }
    }
    
  
    if (method === 'GET' && url.startsWith('/api/form/')) {
        const formId = url.split('/api/form/')[1];
        try {
            const form = await Form.findById(formId);
            if (!form) return res.status(404).json({ message: 'Form not found' });
            return res.status(200).json(form);
        } catch (err) {
            return res.status(500).json({ message: 'Error fetching form', error: err });
        }
    }
    
  
    return res.status(404).json({ message: 'Route not found' });
  };
  