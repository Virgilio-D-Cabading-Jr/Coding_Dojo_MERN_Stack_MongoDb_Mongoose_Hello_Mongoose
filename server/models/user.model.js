// //// Import Mongoose ////////
const mongoose = require("mongoose");

// //// SCHEMA and Rulse ////////
const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
}, {timestamps: true});

// //// MODEL ////////
// This is what we use to make the actual queries to the db
const User = mongoose.model("User", UserSchema);

// //// Export the Model ////////
module.exports = User;