// seeder.js

const mongoose = require('mongoose');
const Post = require('../models/Post');
const User = require('../models/User'); 

async function seedPosts() {
    try {
        await Post.deleteMany({});

        const user = await User.findOne({ email: 'user@example.com' }); // ensure this matches userSeeder.js!
        const userId = user._id; // Extract the ObjectId

        const posts = [];
        for (let i = 0; i < 5; i++) {
            const newPost = new Post({
                text: `This post is my experience with the Ford Focus ${i + 1} !`,
                title: `Ford Focus ${i + 1}`,
                description: `Description ${i + 1} Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
                feature_img: `https://loremflickr.com/320/240`,
                claps: 0,
                author: userId,
                comments: []
            });
            posts.push(newPost);
        }

        await Post.insertMany(posts);
        console.log('Seed completed: 5 posts added.');
    } catch (err) {
        console.error('Seeder error:', err);
    } finally {
        mongoose.disconnect();
    }
}

// Connect to MongoDB and start seeding
mongoose.connect('mongodb://localhost:27017/medium', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        seedPosts();
    })
    .catch((err) => console.error('MongoDB connection error:', err));
