const passport = require("passport")
const GoogleStrategy = require('passport-google-oidc')
const { User } = require("../model/user")



passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/oauth2/redirect/google',
        scope: ['profile', 'email']
    },
    async function verify(issuer, profile, cb){   
        
        let user = await User.findOne({where:{id:profile.id}})
        
        if(!user){
           user= await User.create({id:profile.id, username: profile.displayName, role:'user', email: profile.emails[0].value})        
        }       
        return cb(null, user)
    }
    ))
    passport.serializeUser(function(user, cb){
        process.nextTick(()=>{        
            cb(null, {first_name: user.first_name, role:user.role})
        })
    });
    passport.deserializeUser(function(user, cb){
        process.nextTick(()=>{
            cb(null, {first_name: user.first_name, role: user.role})  
        })
    })

  

module.exports = passport
