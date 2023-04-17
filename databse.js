// Import the required modules
const MongoClient = require('mongodb').MongoClient;

// Set the database URL
const url = 'mongodb://localhost:27017';

// Set the database name
const dbName = 'custom_tshirt_website';

// Sample data for customers
const customers = [
  { name: 'John Doe', email: 'johndoe@example.com', password: 'password123' },
  { name: 'Jane Doe', email: 'janedoe@example.com', password: 'password456' },
];

// Sample data for products
const products = [
  { name: 'Basic T-Shirt', description: 'A simple t-shirt with no frills', price: 10.99 },
  { name: 'Premium T-Shirt', description: 'A high-quality t-shirt with a soft feel', price: 19.99 },
];

// Sample data for designs
const designs = [
  { name: 'Logo', image: 'logo.png' },
  { name: 'Text', image: 'text.png' },
];

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) throw err;

  // Create a new database
  const db = client.db(dbName);

  // Create a collection for customers
  db.createCollection('customers', (err, res) => {
    if (err) throw err;
    console.log('Customers collection created');

    // Insert sample data into the customers collection
    db.collection('customers').insertMany(customers, (err, res) => {
      if (err) throw err;
      console.log('Sample data inserted into customers collection');
    });
  });

  // Create a collection for orders
  db.createCollection('orders', (err, res) => {
    if (err) throw err;
    console.log('Orders collection created');
  });

  // Create a collection for products
  db.createCollection('products', (err, res) => {
    if (err) throw err;
    console.log('Products collection created');

    // Insert sample data into the products collection
    db.collection('products').insertMany(products, (err, res) => {
      if (err) throw err;
      console.log('Sample data inserted into products collection');
    });
  });

  // Create a collection for designs
  db.createCollection('designs', (err, res) => {
    if (err) throw err;
    console.log('Designs collection created');

    // Insert sample data into the designs collection
    db.collection('designs').insertMany(designs, (err, res) => {
      if (err) throw err;
      console.log('Sample data inserted into designs collection');
    });
  });

  // Close the MongoDB connection
  client.close();
});




