const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/controllers');

router.post('/login', controllers.login_post);
router.get('/repos', controllers.repos_get);
router.get('/me', controllers.me);
router.post('/commits', controllers.commits_get);
module.exports = router;