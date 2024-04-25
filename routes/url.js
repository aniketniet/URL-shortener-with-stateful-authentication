const express = require('express');
const { handleGenerateURL, handleGetAnalytics , handleRedirect} = require('../controllers/url');

const router = express.Router();

router.post('/', handleGenerateURL);

router.get('/analytics/:shortId',handleGetAnalytics);

router.get("/:shortId",handleRedirect );


module.exports = router;