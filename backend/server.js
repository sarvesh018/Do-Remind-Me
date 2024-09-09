const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: 'E:\\Projects\\Do-Remind-Me\\.env' });

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

dotenv.config();
const app = express();

if(!MONGO_URI){
    console.log("Error Connecting to Database");
    process.exit(1);
}
mongoose.connect(MONGO_URI).then(
    () => {
        console.log("MongoDB Connected!");
    }
);

if(!PORT){
    console.log("Not able to find PORT");
    process.exit(1);
}
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

app.get("/", (req, res) => {
    const html = `<html><body><h1> Server is Running at ${PORT}</h1></body></html>`;
    res.write(html); 
});
