const express = require('express');
const connectDatabase = require('./connectDB');
const app = express();
const port = process.env.PORT || 8080;
require('dotenv').config();
const userDB = require('./Models/user');
const historyRouter = require('./Routes/history/history');
const regiRouter = require('./Routes/register/regiDriver&User');
const rideRouter = require('./Routes/ride/ride');
const updateLocRouter = require('./Routes/updateDriverLoc/updateLoc');
app.use(express.json());
connectDatabase();


app.use('/register',regiRouter);
app.use('/ride',rideRouter);
app.use('/history',historyRouter);
app.use('/update',updateLocRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);