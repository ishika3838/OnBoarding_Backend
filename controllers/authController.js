const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const dotenv = require('dotenv');

dotenv.config();
const register = async (req, res) => {
   try {
      const { name, email, password } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist) return res.status(400).json({ message: 'User already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.status(201).json({
         message: 'User Registered Successfully',
         data: {
            user: {
               id: user._id,
               name: user.name,
               email: user.email,
            },
            accessToken: token

         }
      });
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
   }
};
const login = async (req, res) => {
   try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid Credentials' });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.status(200).json({
         message: 'User Login successfully',
         data: {
            user: {
               id: user._id,
               name: user.name,
               email: user.email,
            },
            accessToken: token

         }
      });
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
   }
}

const getProfile = async (req, res) => {

   try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) return res.status(404).json({ message: 'User not found' });

      res.status(200).json({
         message: 'User profile fetched successfully',
         data: {
            user: user
         }
      });
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });

   }
};

module.exports = { register, login, getProfile };


