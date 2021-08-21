const express = require('express');
const router = express.Router();
const index = require('./../index.js');
const student = require('./../model/student.js');
const exam = require('./../model/exam.js');



router.get('/list',async function (req, res) {
    const exams = await exam.find()
    res.json(exams)
});

router.get('/questions/:id',async function (req, res) {
    const examId = req.params.id
    const result = await exam.findById(examId).sort('index')
    res.json(result.questions)
});

// router.post ('/showcourse' , async function(req,res) {
//     await student.
// })
module.exports = router;
