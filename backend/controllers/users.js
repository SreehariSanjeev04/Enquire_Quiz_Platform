const users = require('../models/UserModel.js');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

//middlewares
exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.KEY);
      console.log(decoded); 
      req.currUser = decoded;  
      next();
    } catch (error) {
      res.status(400).json({ error: 'Invalid token' });
    }
};

exports.rolechecker = (roles = []) => {
    return (req,res,next) => {
      if (!req.currUser) return res.status(401).json({ error: 'Unauthorized. No user context.' });
      if (roles.length && !roles.includes(req.currUser.role))  return res.status(403).json({ error: 'No permission' });
      next();
    }
};
  
//apis
exports.getUsers = (req, res) => {
    console.log(req.currUser);
    res.json({ message: "List of users" });
};
  
exports.createUser = async (req, res) => {
    try {
        const {name,email,password,school,district,phone,classes} = req.body;
        if (!name || !email || !school || !district || !classes || !phone) return res.status(400).json({
          success: false,
          error:"Insufficient details"});
        const fetch = await users.findOne({email});
        if (fetch) return res.status(401).json({
          success: false,
          error:"user already exists with given email"});
        const hashed = await bcryptjs.hash(password,10);
        const postData = new users({
            name,
            email,
            district,
            classes,
            school,
            phone,
            password : hashed
        });
        await postData.save();
        const disp = postData.toObject();
        delete disp.password;
        res.status(200).json({
          success: true,
          message:"User created sucessfully",disp});
    }
    catch (e) {
        res.status(500).json({
          success: false,
          error: "Server error"
        });
        console.log(e);
    }
};

exports.loginUser = async (req,res) => {
        try {
          const { email, password } = req.body;
          
          if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
          }
      
          const user = await users.findOne({ email });
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          } 
      
          const isMatch = await bcryptjs.compare(password, user.password);
      
          if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
          }
      
          const token = jwt.sign(
            { email: user.email, role: user.role, name:user.name, district:user.district, phone:user.phone, classes:user.classes }, 
            process.env.KEY,  
            { expiresIn: '1h' }  
          );
      
          res.status(200).json({
            message: 'Login successful',
            token,
            user: {
              email: user.email,
              name: user.name,
              role: user.role
            },
          });
      
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Server error' });
        }
}