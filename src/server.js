import express from 'express';
import bodyParser from 'body-parser';
import dayjs from 'dayjs';
import viewEngine from './config/viewEngine'
import initWebRoutes from './routes/initWebRoutes'
import connectDB from './config/connectDB';
import morgan from 'morgan'
const session = require('express-session')
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(session({
    secret: 'Pvcombank',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))

viewEngine(app)
initWebRoutes(app)
connectDB(app)


app.use(morgan('combined'))

let port = process.env.PORT 

app.listen(port, () => {
    console.log(`connect localhost:${port}`)
})