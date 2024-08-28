const express = require("express");

const {
  createPost,
  deletePost,
  getAllPost,
  getPost,
  updatePost,
} = require("../controllers/postController");

const router = express.Router();

router.route("/")
  .get(getAllPost)
  .post(createPost);

router.route('/:id')
  .delete(deletePost)
  .put(updatePost)
  .get(getPost);

module.exports = router;
