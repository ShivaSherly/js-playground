/* eslint-disable max-len */
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');




const registerUser = ('/registeruser', async (req, res) => {

  //  EXPERIMENT STARTED 

  const myPlaintextPassword = req.body.userDetails.password;
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(myPlaintextPassword, salt);
  req.body.userDetails.password = hashedPassword;
  


//  EXPERIMENT ENDED 

  const user = new UserModel(req.body);
  console.log(user);


 

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});





module.exports = {
  registerUser,
 
 
};