const ResponseModel = require('../models/ResponseModel');
const mongoose = require('mongoose');

const createResponse = async (req, res) => {
  try {
    const { userId, response } = req.body;

    if (!userId || !response) {
      console.log(userId);
      console.log(response);
      return res.status(400).json({ message: 'User and response are required.' });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({
        message: 'Invalid user ID.'
      });
    }

    const newResponse = new ResponseModel({
      user: new mongoose.Types.ObjectId(userId),
      response,
    });

    const savedResponse = await newResponse.save();
    res.status(201).json(savedResponse);
    console.log("Response saved successfully");
  } catch (error) {
    console.error('Error creating response:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const getAllResponses = async (req, res) => {
  try {
    const responses = await ResponseModel.find().populate('user', 'name email');
    res.status(200).json(responses);
  } catch (error) {
    console.error('Error fetching responses:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  createResponse,
  getAllResponses,
};
