const express = require('express');
const router = express.Router();
const index = require('./../index.js');
const student = require('./../model/student.js');
/* GET login. */
router.post('/login', async function (req, res) {
	console.log('login!', req.body)
    
    // Mongodb code
    let value = await student.findOne({password:req.body.password, name:req.body.username});
    if (value) {
        res.json({redirect: "Student"})
    } else {
        res.json({redirect: "RegisterStudent"})
    }
});

// router.post('/search',function (req, res) {
//     console.log(req.body)
//     const name = req.body.name
//     const time = req.body.time
//     console.log('Hello Sonia! Name:', name, ' time:', time)
//     res.json({result:'succesful'})
// });

router.post('/register', async function(req, res) {
   await student.create({
       name: req.body.username,
       mobile: req.body.mobile,
       password: req.body.password,
       email: req.body.email
   })
//    res.redirect('/login')
res.json({result:'successful'})
   
})


router.post('/resultexam' , async function(req,res) {
    await student.create({

    })
    res.json( )
})

// router.post ('/showcourse' , async function(req,res) {
//     await student.
// })
module.exports = router;
