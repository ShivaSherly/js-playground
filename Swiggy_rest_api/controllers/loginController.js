/* eslint-disable max-len */





const  = ('/login', async (req, res) => {
  const login = new LoginModel(req.body);

  try {
    await login.save();
    res.status(201).send(login);
  } catch (e) {
    res.status(400).send(e);
  }
});


const userLogin = ('/login', async (req, res) => {
  try {
    console.log(req.body)
  } catch (e) {
    res.status(500).send();
  }
});





module.exports = {
  createNewLogin,
  userLogin
 
};