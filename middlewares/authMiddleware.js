const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const JWT_SECRET = process.env.SECRET_KEY

const authMiddleware = (req,res,next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Verify the token and extract user ID
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = user.id; // Attach user ID to request object
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = authMiddleware