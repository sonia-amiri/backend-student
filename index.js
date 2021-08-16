const bodyParser = require('body-parser');
const express = require ('express');
const mongoose = require('mongoose');
const MongoStore = require("connect-mongo")(session)
const cors = require('cors');

const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/online-test', {
            useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true
            // user:"",
            // pass:""
 });
 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)       
app.use(express.json());
const authRouter = require('./routes/auth');

app.use(session({
    secret: "GWRr23$@E$#2q$R#245$2",
    resave: false,
    saveUninitialized: true,
    cookie: { expires: new Date(Date.now() + 1000 * 60 * 60 * 60) },
    store: new MongoStore({ mongooseCmoonnection: mongoose.connection })
}))

app.use(cors());
app.use('/auth', authRouter);

app.use(bodyParser.json());



const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server started on port ${port}`));