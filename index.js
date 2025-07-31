require('dotenv').config();
const express = require('express');
const portfolioRoute = require('./routes/portfolio');
const connectDB = require('./utils/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
// const cohereCompareRoute = require('./routes/cohere');
const openAICompareRoute = require('./routes/openAI')

const app = express();
const PORT = process.env.PORT;

connectDB().catch(error => {
    console.error('Database connection failed: ', error);
});

app.use(cors());
app.use(express.json());
app.use('/portfolio', portfolioRoute);
//jaqueline login route
app.use('/user', userRoutes);
//cohere AI
// app.use("/compare", cohereCompareRoute);
//openAI
app.use("/compare", openAICompareRoute);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Back end is alive',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`listening on PORT:${PORT}`)
});