require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000
const MONGO_URI = process.env.MONGO_URI;

// --- Middleware ---
// Enable CORS for requests from your React app (default port 3000)
// You might want to restrict this to your frontend's exact origin in production
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests only from your React app's development server
}));
app.use(express.json()); // Body parser for JSON requests

// --- Database Connection ---
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Define Product Schema and Model ---
// This schema defines the structure for ALL your products (menu items and merchandise)
const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  alt: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }, // Keeping as string for currency symbol flexibility
  category: {
    type: String,
    required: true,
    enum: [
      'coffee', 'signature_drink', 'pastry', 'cheesecake', 'sandwich_wrap', // Menu categories
      'mug', 't_shirt', 'artwork', 'brewing_accessory' // Merchandise categories
    ]
  },
  createdAt: { type: Date, default: Date.now } // Optional: timestamp
});

const Product = mongoose.model('Product', productSchema);

// --- API Routes ---

// GET all products (or filter by category)
// Example: GET /api/products?category=coffee
// Example: GET /api/products?category=mug
app.get('/api/products', async (req, res) => {
  try {
    const { category } = req.query; // Get category from query parameter
    let filter = {};
    if (category) {
      filter.category = category;
    }
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new product
app.post('/api/products', async (req, res) => {
  // Basic validation
  const { image, alt, title, description, price, category } = req.body;
  if (!image || !alt || !title || !description || !price || !category) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const product = new Product({
    image, alt, title, description, price, category
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    // Handle Mongoose validation errors (e.g., enum mismatch)
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Error creating product: ' + err.message });
  }
});

// UPDATE a product
app.put('/api/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Error updating product: ' + err.message });
  }
});

// DELETE a product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product: ' + err.message });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});