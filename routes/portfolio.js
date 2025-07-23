const express = require('express');
const router = express.Router();
const { getPortfolioByEmail, 
        addPortfolio, 
        deletePortfolioByEmail,
        editPortfolioByEmail} = require('../controllers/portfolioController');

router.get('/me', getPortfolioByEmail);

router.post('/add', addPortfolio);

router.patch('/edit', editPortfolioByEmail);

router.delete('/delete', deletePortfolioByEmail);

module.exports = router;