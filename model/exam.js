const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePafinate = require('mongoose-paginate-v2');

const ExamSchema = new Schema({
  name : {type: String},
  questions : [],
})
ExamSchema.plugin(timestamps);
ExamSchema.plugin(mongoosePafinate)

module.exports = mongoose.model('exam', ExamSchema);
