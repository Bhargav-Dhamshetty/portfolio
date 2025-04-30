const express = require('express');
const router = express.Router();
const Message = require('../models/contactModel');

// POST route to handle contact form submissions
router.post('/details', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
