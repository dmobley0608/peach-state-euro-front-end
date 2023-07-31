const express = require('express')
require('dotenv').config()
const path = require('path');
const session = require('express-session')
const { sequelizeSync } = require('./utils/sequelize');
const passport = require('./controllers/authentication');
const GoogleStrategy = require('passport-google-oidc')
const { User } = require("./model/user")

const itemsRouter = require("./routes/itemsRouter")
const reviewsRouter = require("./routes/reviewRouter")
const imagesRouter = require("./routes/imageRouter")
const recentMountRouter = require("./routes/recentMountRouter");
const { Session } = require('./model/session');


// Express Config
const app = express();
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Sequelize
sequelizeSync();

//Sessions
app.use(session({
    store: new (require('connect-pg-simple')(session))({
        conString: process.env.DB_CONNECTION_STRING,
        tableName:'session'
      }),
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false,   
    cookie: { maxAge: 1800000}//30mins
    
}))  

//Passport Authentication
app.use(passport.authenticate('session'));




//Routes
app.use("/api/items", itemsRouter)
app.use("/api/reviews", reviewsRouter)
app.use("/api/recent-mounts", recentMountRouter)
app.use("/api/images", imagesRouter) 

//test routes
app.get('/login/federated/google', passport.authenticate('google'))
app.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect:'/admin/items',
    failureRedirect:'/login'
}))

app.get('/api/verify-user', (req, res, next) => {
    const user = req.user
    if(user){
        res.status(200).json(user);
    }else{
        res.redirect("/login")
    }
    
  });
app.get('/api/logout', async(req, res)=>{
    await Session.destroy({where:{sid:req.sessionID}})
    res.redirect("/login")
})

  app.post('/update/name', (req, res, next) => {   
    req.session.name = req.body.name;    
    res.status(200).json(`Your name is now: ${req.session.name}`);
  });

//Catch All (Refresh Redirect)
app.use("/*", (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../build')}) 
})


//Error Handler
app.use((err, req, res, next) => {    
    if (!err.status) {
        err.status = 500
    }
    if (!err.message) {
        err.message = "Oh No! You found a problem. Please try again."    
    }
    console.error(`${err.status}-${err.message}`)
    res.status(err.status).send(err.message)   
})


app.listen(process.env.PORT || 9000, () => {
    console.log(`Running on port: ${process.env.PORT || 9000}`)
})