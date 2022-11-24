const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ // this defines the structure of data
    name: String,
    age: Number,
},{timestamps:true});

const User = mongoose.model('User', userSchema);
// this defines our modal of data that is based on the schema. 
// so its saying we are creating a modal that uses data in the strucutre of ourSchema above. 
// so the data will be full of ourSchema data. 
module.exports = User; // export to use elsewhere
