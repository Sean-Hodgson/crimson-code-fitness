const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express();
app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb+srv://cougfinderAPI:CBzf7NW38oojmGvJ@cluster.pauus.mongodb.net/cougfinderAPI?authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const Profile = require("./models/profile.js");


app.get("/profile/:id", (req, res) => {
   Profile.findOne({
        username:req.params['id']
   }, (err, returnProfile) =>{
    if (err) {
       // handle error
     }
     if(returnProfile != null)
     {
       res.send(returnProfile);

     }else {
        res.send({Status: "No profile"});
       return;
     }})
})

app.get("/find", (req, res) => {
  Profile.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count)
  
    // Again query all users but only fetch one offset by our random #
    Profile.findOne().skip(random).exec(
      function (err, result) {
        // Tada! random user
        console.log(result) 
        res.send(result)
      })
  })
})

app.post("/cprofile/", (req, res) => {
    let data = req.body;

    Profile.findOne({
        username:data.username
   }, (err, returnProfile) =>{
    if (err) {
       // error code
     }
     if(returnProfile != null)
     {
       res.send({Status:"403"});
     }else{
         const newprofile = new Profile({
            _id: mongoose.Types.ObjectId(),
            username: data.username,
            instagramTag: data.instagram,
            snapchatTag: data.snapchat,
            favSong: data.song,
            Major: data.major,
            interests: ["test"]
        });
    newprofile.save()
    console.log(data);
    res.send({Status: "Sup"});
     }})})


app.listen(2796, () => {
    console.log("API Running!");
})

