const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'Email already exists!' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: role || 'customer'
        });

        await user.save();

        const token = jwt.sign({ id: user._id }, 'secret');
        res.json({ 
            msg: 'Registration successful!',
            token: token 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'User not found!' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials!' });

        const token = jwt.sign({ id: user._id }, 'secretKey');
        res.json({ msg: 'Login successful!', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }

};
