const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path')
const PORT = 8000;
const routes = require('./routes/index')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origins: [
    // "https://sweet-cake-react.web.app",
    // "https://sweet-cake-responsive.vercel.app",
    "http://localhost:3000/",
  ],
};
app.use(cors(corsOptions));
app.use('/user/upload', express.static(path.join(__dirname, 'utils/uploads/profile')))
app.use('/api', routes);
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});