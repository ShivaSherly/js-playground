const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('./db/mongoose');


const port = 3000;



// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongo Database is  connected successfully!');
});

app.get("/", async(req, res) => {
    res.send('server running '); 
});


app.use(express.json());
app.use('/orders', require('./routes/orderRouter'));
app.use('/staff', require('./routes/staffRouter'));
app.use('/user', require('./routes/userRouter'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
