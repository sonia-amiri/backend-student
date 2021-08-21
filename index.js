const bodyParser = require('body-parser');
const express = require ('express');
const mongoose = require('mongoose');
//const MongoStore = require("connect-mongo")(session)
const cors = require('cors');

const app = express();
app.use(cors());

// mongoose.connect( 'mongodb://online-test:secret@mongo:27017/online-test', {
mongoose.connect( 'mongodb://online-test:secret@127.0.0.1:27017/online-test', {
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
const examRouter = require('./routes/exam');

// app.use(session({
//     secret: "GWRr23$@E$#2q$R#245$2",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { expires: new Date(Date.now() + 1000 * 60 * 60 * 60) },
//     store: new MongoStore({ mongooseCmoonnection: mongoose.connection })
// }))

app.use('/auth', authRouter);
app.use('/exam', examRouter);

// app.use(bodyParser.json());



const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server started on port ${port}`));
