const express = require('express')
require('dotenv').config()
const path = require('path');
const session = require('express-session')
const { sequelizeSync } = require('./utils/sequelize');
const passport = require('./controllers/authentication');
const multer = require('multer')
const helmet = require('helmet')

const itemsRouter = require("./routes/itemsRouter")
const reviewsRouter = require("./routes/reviewRouter")
const imagesRouter = require("./routes/imageRouter")
const recentMountRouter = require("./routes/recentMountRouter");
const emailRouter = require("./routes/emailRoutes")
const { Session } = require('./model/session');
const { UUIDV4 } = require('sequelize');


// Express Config
const app = express();
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

//Helmet

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            "default-src": ["peachstateeuro.com", 'localhost', 'google.com'],
            styleSrc: [
                "self",                
                 'localhost:9000',
                  'peachstateeuro.com',                  
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
                    'trusted.cdn.com',
                    "'unsafe-inline'"
                ],
            scriptSrc: ["self", "localhost:9000", 'peachstateeuro.com', 'trusted.cdn.com', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js'],
            manifestSrc: ['self', 'http://localhost:9000', "peachstateeuro.com"],
            connectSrc: ['localhost:9000', 'peachstateeuro.com'],
            imgSrc: ['self', 'localhost:9000', 'ik.imagekit.io', "peachstateeuro.com", 'http://www.w3.org/2000/svg']
        }
    }
}))
//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Multer
const upload = multer();
//Sequelize
sequelizeSync();

//Sessions
app.use(session({
    store: new (require('connect-pg-simple')(session))({
        conString: process.env.DB_CONNECTION_STRING,
        tableName: 'session'
    }),
    proxy:true,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,   
    cookie: {
        maxAge: 1800000,//30mins
        secure:process.env.NODE_ENV === 'production', // Crucial
        httpOnly: true
    }

}))

//Passport Authentication
app.use(passport.authenticate('session'));




//Routes
app.use("/api/items", upload.none(), itemsRouter)
app.use("/api/reviews", upload.none(), reviewsRouter)
app.use("/api/recent-mounts", upload.none(), recentMountRouter)
app.use("/api/images", imagesRouter)
app.use("/api/email", emailRouter)

//test routes
app.get('/login/federated/google', passport.authenticate('google'))
app.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: '/admin/items',
    failureRedirect: '/login'
}))

app.get('/api/verify-user', (req, res, next) => {
    const user = req.user
    if (user) {
        res.status(200).json(user);
    } else {
        res.redirect("/login")
    }

});
app.get('/api/logout', async (req, res) => {
    await Session.destroy({ where: { sid: req.sessionID } })
    res.redirect("/login")
})

app.post('/update/name', (req, res, next) => {
    req.session.name = req.body.name;
    res.status(200).json(`Your name is now: ${req.session.name}`);
});

//Catch All (Refresh Redirect)
app.use("/*", (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../build') })
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