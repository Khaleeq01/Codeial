const express = require('express');

const router = express.Router();
const posts_api = require('../../../controllers/api/v1/posts_api');
router.use('/posts', require('./posts'));
router.use('/users', require('./users'));
router.delete('/post/:id',posts_api.destroy);
module.exports = router;