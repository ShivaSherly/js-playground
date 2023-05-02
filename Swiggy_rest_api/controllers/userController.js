/* eslint-disable max-len */
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');




const registerUser = ('/registeruser', async (req, res) => {

  const myPlaintextPassword = req.body.userDetails.password;
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(myPlaintextPassword, salt);
  req.body.userDetails.password = hashedPassword;

  const user = new UserModel(req.body);
  console.log(user);

  

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

const userLogin = ('/userLogin', UserModel,async (req, res) => {

  const user = await UserModel.find({ 'userDetails.email': req.body.email });
  // if(!user?.userDetails){
  //   res.status(500).send("User Does not exist");
  // }

  try {
    if(user.userDetails.password==req.body.password){

    //   bcrypt.compare(req.body.password, user.userDetails.password, function(err, result) {
    //     // result == true
    // });
      console.log("Congratulations welcome to the application");
      res.status(200).send("Congratulations welcome to the application");
    }
    else{
      console.log("invalid Password");
      res.status(500).send("invalid Password");
    }
  } catch (e) {
    console.log("catch");
    res.status(400).send(e);
  }
});





module.exports = {
  registerUser,
  userLogin,
};