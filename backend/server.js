const express = require('express')
const app = express()
const user = require('./controllers/users')
const dotenv = require('dotenv');
const compression = require('compression');
const { ConnectDatabase } = require('./database/database.js');
const response = require('./controllers/ResponseController.js')
const cors = require('cors');

dotenv.config();
app.use(compression());
app.use(cors(
    {
        /* Sample CORS Setup for development purposes, gotta change this midget later*/
        origin: ['http://localhost:5173'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
))

app.use(express.json());

const PORT = process.env.PORT || 3000;

//User routes
app.get('/auth/users',user.authenticate,user.getUsers);
app.post('/auth/register',user.createUser);
app.post('/auth/login',user.loginUser);
app.post('/quiz/create-response', response.createResponse);
app.get('/quiz/get-responses', response.getAllResponses);

const Server = () => {
    app.listen(3000,()=>{console.log(`Server listening to port ${PORT}`)});
    ConnectDatabase();
}

Server();