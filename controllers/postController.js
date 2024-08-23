const Post = require("../models/postModel");

/***
 * @method get
 * @endPoint /api/users
 */
async function getAllPost(req, res, next) {
  try {
    const post = await Post.find();
    res.status(200).json({
      status: "Success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
    });
  }
}

/***
 * @method get
 * @endPoint /api/users/:id
 */
async function getPost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
    });
  }
}

/***
 * @method post
 * @endPoint /api/users
 */
async function createPost(req, res, next) {
  try {
    const post = await Post.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
    });
  }
}

/***
 * @method delete
 * @endPoint /api/users/:id
 */
async function deletePost(req, res, next) {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
    });
  }
}

/***
 * @method put
 * @endPoint /api/users/:id
 */
async function updatePost(req, res, next) {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
    });
  }
}

module.exports = Object.freeze({
  getAllPost,
  getPost,
  createPost,
  deletePost,
  updatePost,
})