const express = require("express");
const app = express();
const PORT = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// //// Middle Ware ////////
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log(`The server is all fired up on port ${PORT}`));
