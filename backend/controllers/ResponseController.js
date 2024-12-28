const ResponseModel = require('../models/ResponseModel');
const mongoose = require('mongoose');

const createResponse = async (req, res) => {
  try {
    const { userId, response } = req.body;

    if (!userId || !response) {
      return res.status(400).json({ message: 'User and response are required.' });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({
        message: 'Invalid user ID.'
      });
    }

    const newResponse = new ResponseModel({
      user: mongoose.Types.ObjectId(userId),
      response,
    });

    const savedResponse = await newResponse.save();
    res.status(201).json(savedResponse);
  } catch (error) {
    console.error('Error creating response:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const getAllResponses = async (req, res) => {
  try {
    const responses = await ResponseModel.find().populate('user', 'username email');
    res.status(200).json(responses);
  } catch (error) {
    console.error('Error fetching responses:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const getResponseByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const responses = await ResponseModel.find({ user: userId }).populate('user', 'username email');
    
    if (!responses.length) {
      return res.status(404).json({ message: 'No responses found for this user.' });
    }

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
