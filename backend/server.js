const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const contactApp = require("./apis/contactApi");

// CORS Configuration: Allow requests from the specific URL (Vercel link)
const corsOptions = {
  origin: 'https://portfolio-bhargav-dhamshettys-projects.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If you need to handle cookies or authentication
};

// Middlewares
app.use(cors(corsOptions)); // Apply CORS with the specific options
app.use(express.json());

// Routes
app.use("/contact-api", contactApp);

// MongoDB Connection
mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
