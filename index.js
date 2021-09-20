const express = require('express');//from the dependecies in package.json
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser =  require('cookie-parser');

const { user } = require('./models/user');

mongoose.connect('mongodb+srv://React-blog:ogb1389REACT-BLOG@react-blog.zsyav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true }).then(() =>console.log('DB connected'))
                             .catch(err => console.error(err));


app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());

//used to test server; nodemon
app.get('/', (req,res) =>{
    res.json({"Hello":"I am the latest Doctor in town. I am for Jesus and Him alone"})
})


app.post('/api/users/register', (req, res) => {
    const user = new User(req.body) 

    userr.save((err, userData) =>{
        if(err) return res.json ({ success: false, err})
        return res.status(200).json({
            success:true
        })

    })
})

/*Route handling. we go to the official documentation for express routing 
go to https://expressjs.com/en/guide/routing.html */
app.get('/', (req,res)=>{
    res.send('Love world')
});


//telling our app to listen to port 5000 this is the standard port for nodejs applications
app.listen(5000);