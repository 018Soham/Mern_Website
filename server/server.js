require('dotenv').config();
const express = require('express');
var cors = require('cors');
const app = express();

const router = require('./router/auth-router');
const connectDb = require('./utils/db');
const errorHandler = require('./middlewars/error-middleware');

var corsOptions = {
    origin: 'http://localhost:5173', // Removed trailing slash
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);

app.use(errorHandler);

// Creating Port
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at Port ${PORT}`);
    });
});
