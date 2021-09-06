const express = require('express');
const router = express.Router();
let likes = require('../db.json');


router.get('/', (req, res) => {
	res.render("home", {
		meta: req.app.get('meta'),
		likes: likes.comments
	});
});

router.get('/about', (req, res) => {
	res.render("about", {
		meta: req.app.get('meta')
	});
});

module.exports = router;
