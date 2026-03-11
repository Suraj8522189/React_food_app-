const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')


const app = express();
const port = 8080;
dotenv.config();
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

  const Users = mongoose.model('Users',{
    name: String,
    mobile: String,
    mail: String,
    password: String,  
  });

  
// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello Suraj');
});


// Singup Page
app.post('/signup', (req, res) => {
  const name = req.body.name;
  const mobile = req.body.mobile;
  const mail = req.body.mail;
  const password = req.body.password;
  const user = new Users({name: name, mobile: mobile, mail: mail, password: password});
  user.save().then(()=>{
    res.send({message: 'saved success'})
  }).catch(()=>{
    res.send({message: 'server err'})
  })

});

// login Page
app.post('/login',async (req,res)=>{
  const {mail, password} = req.body;
  try{
    const user = await Users.findOne({mail: mail, password: password});

    if(user){
      res.send({message:"login success",user: user })
    }else{
      res.send({message: "Invalid email & Password"});
    }
  }catch(err){
    res.send({message:"server error"})
  }
})



// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});