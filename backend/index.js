const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");

// Bring in the app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = exp();
const arbitre = require("./routes/arbitre");
const championnat = require("./routes/championnats");
const terrain = require("./routes/terrain");
const centre = require("./routes/centre");

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

// User Router Middleware
app.use("/api/users", require("./routes/users"));
app.use("/api/arbitre", arbitre);
app.use("/api/championnat", championnat);
app.use("/api/terrain", terrain);
app.use("/api/centre", centre);

const startApp = async () => {
  try {
    // Connection With DB
    await connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    success({
      message: `Successfully connected with the Database \n${DB}`,
      badge: true,
    });

    // Start Listenting for the server on PORT
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true,
    });
    startApp();
  }
};

startApp();
