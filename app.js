const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/bootroutes');
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors())
app.use("/books",router);

mongoose.connect(
      "mongodb+srv://admin:s76q6NYlqEqtSBet@cluster0.yiiouwv.mongodb.net/Bookstore?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected To Database"))
    .then(() => {
      app.listen(5000);
    })
    .catch((err) => console.log(err));

// s76q6NYlqEqtSBet