const express = require('express');//from the dependecies in package.json
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://React-blog:ogb1389REACT-BLOG@react-blog.zsyav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true }).then(() =>console.log('DB connected'))
                             .catch(err => console.error(err));


/*Route handling. we go to the official documentation for express routing 
go to https://expressjs.com/en/guide/routing.html */
app.get('/', (req,res)=>{
    res.send('Love world')
});


//telling our app to listen to port 5000 this is the standard port for nodejs applications
app.listen(5000);