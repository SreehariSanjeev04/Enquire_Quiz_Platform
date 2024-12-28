const {users} = require('../database/database.js')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.getUsers = (req, res) => {
    res.json({ message: "List of users" });
};
  
exports.createUser = async (req, res) => {
    try {
        const {name,email,password,school,district,phone,classes} = req.body;
        if (!name || !email || !school || !district || !classes || !phone) return res.status(400).json({"error":"insufficient details"});
        const fetch = await users.findOne({email});
        if (fetch) return res.status(401).json({"error":"user already exists with given email"});
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
        res.status(200).json({"success":"added user",disp});
    }
    catch (e) {
        res.status(500).send("Server error");
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
            { email: user.email, role: user.role }, 
            process.env.KEY,  
            { expiresIn: '30m' }  
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