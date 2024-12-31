const ResponseModel = require('../models/ResponseModel');
const mongoose = require('mongoose');
const users = require('../models/UserModel.js');

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
    const responses = await ResponseModel.find({score: -1}).populate('user', 'name email');
    res.status(200).json(responses);
  } catch (error) {
    console.error('Error fetching responses:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const updateScore = async (req, res) => {
  const { userId, score } = req.body;
  if(!userId || !score) {
    return res.status(400).json({
      message: 'User ID and score are required.'
    })
  }
  try {
    const updatedUser = await ResponseModel.findOneAndUpdate({
      user: new mongoose.Types.ObjectId(userId),
      score: score
    });
    if(!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
}

const getLeaderboard = async (req, res) => { 
  try {
    const leaderboard = await ResponseModel.find({
      score: { $exists: true, $ne: -1 } 
    })
     .sort({ score: -1 })
     .limit(10)
     .populate('user', 'name score email school district phone classes');
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
}

module.exports = {
  createResponse,
  getAllResponses,
  updateScore,
  getLeaderboard,
};
