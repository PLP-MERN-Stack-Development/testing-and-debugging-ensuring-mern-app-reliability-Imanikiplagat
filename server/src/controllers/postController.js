// server/src/controllers/postsController.js
const Post = require('../models/Post');

// Create a new post
const createPost = async (req, res, next) => {
  try {
    const { title, content, category } = req.body;
    if (!title || !content)
      return res.status(400).json({ error: 'Title and content required' });

    const post = await Post.create({
      title,
      content,
      author: req.user.id,
      category,
      slug: title.toLowerCase().replace(/\s+/g, '-'),
    });

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// Get all posts with optional pagination and category filter
const getPosts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const filter = {};
    if (category) filter.category = category;

    const posts = await Post.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();

    res.json(posts);
  } catch (err) {
    next(err);
  }
};

// Get a single post by ID
const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).lean();
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// Update a post (only by the author)
const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Forbidden: You can only edit your own posts' });
    }

   const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new : true}
   );

    res.status(200).json({ message: 'Post updated successfully', ...updatedPost.toObject()});
  } catch (err) {
    next(err);
  }
};

// Delete a post (only by the author)
const deletePost = async (req, res, next) => {
  try {
    // Find the post
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    // Check if user is authenticated
    if (!req.user) return res.status(401).json({ error: 'Not authenticated' });

    // Check if user is the author
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Forbidden: You can only delete your own posts' });
    }

    // Delete the post
    await Post.findByIdAndDelete(req.params.id);

    // Respond
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
