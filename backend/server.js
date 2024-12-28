const express = require('express')
const app = express()
const user = require('./controllers/users')
const {users} = require('./database/database.js')

app.use(express.json());
app.listen(6969,()=>{console.log("ok")});


//User routes
app.get('/auth/users',user.getUsers);
app.post('/auth/users',user.createUser);
app.post('/auth/login',user.loginUser);