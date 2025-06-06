const mongoose = require('mongoose');
const preferenceSchema= new mongoose.Schema({
    user:{  type:mongoose.Schema.Types.ObjectId, ref:'User'},
    theme:String,
    layout:String,
});

module.exports = mongoose.model('Preference',preferenceSchema);