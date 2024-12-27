const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use('/backend/images', express.static(path.join(__dirname, 'public/images')));
let posts = [
    {
        id: 1,
        title: 'How to Reinstall WordPress: 5 Different Methods Depending On Your Needs',
        image: 'image1.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 2,
        title: 'Web page layout 101: website anatomy every designer needs to learn',
        image: 'image2.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 3,
        title: 'Website Downtime: Applicable Tips on How to Prevent It',
        image: 'image3.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 4,
        title: '6 Ways to Leverage Facebook for Marketing Success',
        image: 'image4.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 5,
        title: 'Updating WooCommerce: A Safe and In-Depth Guide',
        image: 'image5.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 6,
        title: 'WP-CLI v2 – Managing WordPress From the Terminal',
        image: 'image6.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 7,
        title: 'Social Media Image Sizes and Quick Tips for WordPress Usersn',
        image: 'image7.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 8,
        title: 'How to Create Outstanding Long-Form Articles in WordPress',
        image: 'image8.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 9,
        title: 'How to Use Fiverr to Reduce Business Busywork',
        image: 'image9.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 10,
        title: 'Email Marketing Best Practices for Sending Better Emails',
        image: 'image10.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 11,
        title: 'Google Site Verification: 7 Ways to Verify With Search Console',
        image: 'image11.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 12,
        title: 'Twitter Marketing Strategies to Beef up Your Social Game',
        image: 'image12.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 13,
        title: 'The Ultimate Step-by-Step Guide on Website Usability Testing',
        image: 'image13.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
    {
        id: 14,
        title: '8 Ways To Leverage LinkedIn for Marketing Success',
        image: 'image14.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content ',
    },
];

app.get('/', (req, res) => {
    res.send('API is working!');
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
  
const upload = multer({ storage: storage });

app.post('/posts', upload.single('image'), (req, res) => {
    const { title, author, category, excerpt, content } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !image || !author || !category || !excerpt || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        image,
        author,
        category,
        excerpt,
        content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }