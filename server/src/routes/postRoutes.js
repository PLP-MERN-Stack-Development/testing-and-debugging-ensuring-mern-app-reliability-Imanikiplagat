// server/src/routes/postRoutes.js
const express = require('express');
const { protect } = require('../utils/auth');
const {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
} = require('../controllers/postController');

const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;
