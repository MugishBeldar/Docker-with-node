const asyncHandler = require("express-async-handler");

exports.getTest = asyncHandler(async (req, res) => {
  
  res.status(200).json({
    data: 'test results:>>>>>'
  });
});
