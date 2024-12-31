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
        /* Sample CORS Setup for development purposes, gotta change this midget later */
        origin: ['http://localhost:5173'],
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }
))

app.use(express.json());

const PORT = process.env.PORT || 3000;

//User routes
app.get('/auth/users',user.authenticate,user.getUsers);
app.post('/auth/register',user.createUser);
app.post('/auth/login',user.loginUser);
app.post('/quiz/create-response', user.authenticate, user.rolechecker(["Admin", "User"]), response.createResponse);
app.get('/quiz/get-responses', user.authenticate, user.rolechecker(["Admin"]),response.getAllResponses);
app.patch('/quiz/update-score', user.authenticate, user.rolechecker(["Admin"]), response.updateScore);
app.get('/quiz/get-leaderboard', user.authenticate, user.rolechecker(["Admin"]), response.getLeaderboard);

const Server = () => {
    app.listen(3000,()=>{console.log(`Server listening to port ${PORT}`)});
    ConnectDatabase();
}

Server();