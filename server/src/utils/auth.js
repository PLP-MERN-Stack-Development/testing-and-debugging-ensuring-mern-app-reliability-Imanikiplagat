import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // adjust the path if needed

// Secret key (same one you used in generateToken)
const JWT_SECRET = process.env.JWT_SECRET || 'testsecret';

// ✅ Function to generate tokens
export const generateToken = (user) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
};

// ✅ Middleware to protect routes
export const protect = async (req, res, next) => {
  let token;

  // 1️⃣ Check if token exists in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      // 2️⃣ Verify token
      const decoded = jwt.verify(token, JWT_SECRET);

      // 3️⃣ Attach user to request
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ error: 'User not found' });
      }

      return next();
    } catch (error) {
      console.error('Auth error:', error.message);
      return res.status(401).json({ error: 'Not authorized, token invalid' });
    }
  }

  // 4️⃣ If no token at all
  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token' });
  }
};
