const express = require('express')
const app = express()
const user = require('./controllers/users')
const {users} = require('./database/database.js')
app.listen(6969,()=>{console.log("ok")});

app.get('/users',user.getUsers);