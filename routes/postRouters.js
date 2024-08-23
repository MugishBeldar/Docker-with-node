const express = require("express");

const {createPost,deletePost,getAllPost,getPost,updatePost} = require("../controllers/postController");

const router = express.Router();

router.route("/").get(get);

module.exports = router;
