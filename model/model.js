const mongoose = require('mongoose');
const SampleSchema = mongoose.Schema({
    name:String,
   age:String
  });
  
  
const Sample = mongoose.model("samples", SampleSchema);
module.exports = Sample;