const mongoose = require('mongoose');
const User = require('../models/User');

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/medium', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const BASE_URL = 'http://localhost:3000'; // replace this with your actual base URL in dev/prod

// Seed a single user
const seedUser = async () => {
  try {
    await User.deleteMany({});
    const profilePic = `${BASE_URL}/assets/img/san-logo.jpg`; // Dynamic image URL
    const newUser = new User({
      name: 'San',
      email: 'user@example.com',
      provider: 'local', // Example provider value
      provider_id: '123', // Example provider ID value
      token: 'sampletoken', // Example token value
      provider_pic: profilePic,// Example profile picture URL
      followers: [], // Initially no followers
      following: [] // Initially not following anyone
    });
    
    const savedUser = await newUser.save();
    console.log('User seeded:', savedUser);
  } catch (error) {
    console.error('Error seeding user:', error);
  } finally {
    mongoose.disconnect(); // Disconnect after seeding
  }
};

seedUser();
