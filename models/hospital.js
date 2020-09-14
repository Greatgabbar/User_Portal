const mongoose = require('mongoose');
// download validator from npm
const validator = require('validator');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A hospital needs a name'],
        trim: true,
        maxlength: [40, 'The maximum length of name is 40 characters'],
        minlength: [10, 'The minimum length of name is 10 characters'],
    },
    state: {
        type: String,
        required: [true, 'A hospital needs a state'],
    },
    district: {
        type: String,
        required: [true, 'A hospital needs a district'],
    },
    Tehsil: {
        type: String,
        required: [true, 'A hospital needs a Tehsil'],
    },
    address: {
        type: String,
        required: [true, 'A hospital needs a address'],
    },
    type: {
        type: String,
        required: [true, 'A hospital needs a Type'],
        enum: {
            values: ['Government', 'Private','Semi Government'],
            message: 'Type can only be govt. , private, or semi Govt.',
        }
    },
    totalBedsCount: {
        type: Number,
        required: [true, 'A hospital needs count of totoal beds'],
    },
    OccupiedBedsCount: {
        type: Number,
        required: [true, 'A hospital should have data of occupied beds'],
    },
    email:{
        type: String,
        required: [true, 'A hospital needs a email'],
        validate: [validator.isEmail, 'Please enter a valid email!!'],
    },
    head: {
        type: String,
        required: [true, 'A hospital needs a head'],
    },
    Contact: {
        type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'A hospital needs a Contact'],
    },
    Photo: {
        type: Buffer
       
    },
    password: {
        type: String,
        required: [true, 'A hospital needs a password'],
    }
});

module.exports = mongoose.model('Hospital', hospitalSchema);
