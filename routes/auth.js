const express = require('express');
const router = express.Router();
const index = require('./../index.js');
const student = require('./../model/student.js');
/* GET login. */
router.post('/login', async function (req, res) {
	console.log('login!')
    res.json({name: "Hesam"})
    // Mongodb code
    let value = await student.findOne({email:req.body.email, name:req.body.username});
    if (value) {
        res.render('./../../student-ui/src/views/Student.vue')
    }else {
        res.render('./../../student-ui/src/views/RegisterStudent.vue')
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
   res.redirect('/login')
   
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
