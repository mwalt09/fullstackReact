//----------------------   DEPENDENCIES   ----------------------
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;  // Just want the 'Strategy' method
const mongoose = require("mongoose");
const keys = require("../config/keys");


const User = mongoose.model("users");



//----------------------   Converting Google profile.id to mongo generated id and back again   ----------------------
passport.serializeUser((user, done) => {        // Getting the unique user id and storing it for use in cookie
  done(null, user.id);                          // Uses user id that is gathered below during database callback
});                                             // Specifying the user id created by mongo


passport.deserializeUser((id, done) => {        // Going from id in cookie to id in database
  User.findById(id).then(user => {              // Looks up by id to get the user
    done(null, user);
  });
});




//----------------------   Tell Passport to use GoogleStrategy inside of our application   ----------------------
passport.use(
  new GoogleStrategy(                                // Calls the GoogleStrategy contructor
    {
      clientID: keys.googleClientID,                 // Options constructor needs.
      clientSecret: keys.googleClientSecret,         // These are set in Google Developer console
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {  // These variables capture data sent back from Google

      // Query database to see if there is already a user with this id
      const existingUser = await User.findOne({ googleID: profile.id });

      if(existingUser) {
        // Already have a record with this id
        return done(null, existingUser);
      }

      // We don't have a record with this id. Make a new record
      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);
