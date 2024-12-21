const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const cors = require("cors");

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
        content: 'Full content of the article goes here...',
    },
    {
        id: 2,
        title: 'Web page layout 101: website anatomy every designer needs to learn',
        image: 'image2.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 3,
        title: 'Website Downtime: Applicable Tips on How to Prevent It',
        image: 'image3.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 4,
        title: '6 Ways to Leverage Facebook for Marketing Success',
        image: 'image4.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 5,
        title: 'Updating WooCommerce: A Safe and In-Depth Guide',
        image: 'image5.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 6,
        title: 'WP-CLI v2 – Managing WordPress From the Terminal',
        image: 'image6.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 7,
        title: 'Social Media Image Sizes and Quick Tips for WordPress Usersn',
        image: 'image7.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 8,
        title: 'How to Create Outstanding Long-Form Articles in WordPress',
        image: 'image8.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 9,
        title: 'How to Use Fiverr to Reduce Business Busywork',
        image: 'image9.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 10,
        title: 'Email Marketing Best Practices for Sending Better Emails',
        image: 'image10.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 11,
        title: 'Google Site Verification: 7 Ways to Verify With Search Console',
        image: 'image11.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 12,
        title: 'Twitter Marketing Strategies to Beef up Your Social Game',
        image: 'image12.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 13,
        title: 'The Ultimate Step-by-Step Guide on Website Usability Testing',
        image: 'image13.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
    {
        id: 14,
        title: '8 Ways To Leverage LinkedIn for Marketing Success',
        image: 'image14.svg',
        author: 'Tomas Laurinavicius',
        category: 'Design Process',
        excerpt: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
        content: 'Full content of the article goes here...',
    },
];

app.get('/posts', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 4;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedPosts = posts.slice(startIndex, endIndex);

    res.json(paginatedPosts);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((p) => p.id === postId);
    if (!post) {
        return res.status(404).json({ message: 'Bài viết không tồn tại' });
    }
    res.json(post);
});

app.post('/posts', (req, res) => {
    const { title, image, author, category, excerpt, content } = req.body;
    if (!title || !image || !author || !category || !excerpt || !content) {
        return res.status(400).json({ message: 'Tất cả các trường là bắt buộc' });
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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
