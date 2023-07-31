const express = require('express')
require('dotenv').config()
const path = require('path');
const session = require('express-session')
const { sequelizeSync } = require('./utils/sequelize');

const itemsRouter = require("./routes/itemsRouter")
const reviewsRouter = require("./routes/reviewRouter")
const imagesRouter = require("./routes/imageRouter")
const recentMountRouter = require("./routes/recentMountRouter")

// Express Config
const app = express();
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Sessions
const store =new session.MemoryStore()
app.use(session({

    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false,
    store,
    cookie: {
        maxAge: 86400000, 
        secure: false, 
        sameSite: "none"
    },
    role: ''
}))  


//Sequelize
sequelizeSync();


//Routes
app.use("/api/items", itemsRouter)
app.use("/api/reviews", reviewsRouter)
app.use("/api/recent-mounts", recentMountRouter)
app.use("/api/images", imagesRouter)
//Catch All (Refresh Redirect)
app.use("/*", (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../build')})
})


//Error Handler
app.use((err, req, res, next) => { 
    console.log('error')
    if (!err.status) {
        err.status = 500
    }
    if (!err.message) {
        err.message = "Oh No! You found a problem. Please try again."    
    }
    console.error(`${err.status}-${err.message}`)
    res.status(err.status).send(err.message)
    res.redirect("/")
})


app.listen(process.env.PORT || 9000, () => {
    console.log(`Running on port: ${process.env.PORT || 9000}`)
})