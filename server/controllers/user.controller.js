// Import Model into the Controller
const User = require("../models/user.model");

//////////////////////////////////////////
//  USER CONTROLLER
//////////////////////////////////////////

// //// CREATE ///////////////////////////

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// //// RETRIEVE /////////////////////////

/**
 * **** Find All Users ********
 * @param {*} req 
 * @param {*} res 
 */
module.exports.findAllUsers = (req, res) => {
  // db.Users.find()
  User.find()
    // Important: what we return here is that we receive in React
    .then(allDaUsers => res.json({ users: allDaUsers, message: "Success" }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

/**
 * **** Find ONE User by ID ********
 * @param {*} req 
 * @param {*} res 
 */
// User.findByID(req.params.id) <-- Alternate way of doing next line
module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ user: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

// //// UPDATE ////////////////////////////

/**
 * **** Update A User ********
 * @param {*} req 
 * @param {*} res 
 */
module.exports.updateExistingUser = (req, res) => {
  // User.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true})
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// //// DELETE ////////////////////////////

module.exports.deleteAnExistingUser = (req, res) => {

  // User.deleteOne({ _id: req.params.id })
  User.findByIdAndDelete(req.params.id)
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



