const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePafinate = require('mongoose-paginate-v2');

const StudentSchema = new Schema({
  name : {type: String},
  mobile : [{type: String}],
  email : {type: String},
  password : {type: String},

})
StudentSchema.plugin(timestamps);
StudentSchema.plugin(mongoosePafinate)



module.exports = mongoose.model('student', StudentSchema);