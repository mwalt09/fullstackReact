//----------------------   DEPENDENCIES   ----------------------
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser")
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");




//----------------------   Connect mongoose to the database   ----------------------
mongoose.connect(keys.mongoURI);



//----------------------   Declare Express variable   ----------------------
const app = express();



//----------------------   Setup Body Parser   ----------------------
app.use(bodyParser.json());



//----------------------   Tell Express to use cookies and Passport   ----------------------
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


//----------------------   Call authRoutes and immediately call 'app' function   ----------------------
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file 
  // if it doesn't recognize the route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//----------------------   Set port variable for Node   ----------------------
const PORT = process.env.PORT || 5000;


//----------------------   Tell Express to start listening   ----------------------
app.listen(PORT);
