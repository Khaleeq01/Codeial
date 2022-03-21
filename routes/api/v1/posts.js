const express = require('express');
const router = express.Router();
const passport = require('passport');
const posts_api= require('../../../controllers/api/v1/posts_api');

const postsController = require('../../../controllers/posts_controller');

router.post('/create', passport.checkAuthentication, postsController.create);
router.get('/destroy/:id', passport.checkAuthentication, postsController.destroy);
router.get('/',posts_api.index);

module.exports = router;
