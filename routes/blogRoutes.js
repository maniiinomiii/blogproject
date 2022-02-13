const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.post('/:id/updates', blogController.blog_updatedata);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id/edit', blogController.blog_edit);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);




module.exports = router;