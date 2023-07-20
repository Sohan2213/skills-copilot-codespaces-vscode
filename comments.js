// Create a web server
Synthesizing 9/10 solutions (Duplicates hidden)

Accept Solution
const express = require('express');
const router express. Router();

const commentController = require('../controllers/comment

router.get('/', commentController.comment_list);

router.get('/create', commentController.comment_create_ge

router.post('/create', commentController.comment_create_p

router.get('/:id/delete', commentController.comment_delet
git add comments.js
git commit -m "Copilot third commit"
