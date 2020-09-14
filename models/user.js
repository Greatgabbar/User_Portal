const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        required: [true, 'Every User must have a name' ]
    },
    dob: {
        type: String,
        required: [true, 'Every User must have a date of birth' ]
    },
    aadhaar: {
        type: String,
        unique: true,
        minLength: 12,
        maxLength: 12,
        validate: {
          validator: function(v) {
            return /\d{4}-\d{4}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not a valid Adhar number!!`
        },
        required: [true, 'Every User must have a Adhar number' ]
    },
    healthid: {
        type: String,
        required: [true, 'Every User must have a healtId' ]
    },
    state: {
        type: String,
        required: [true, 'Every User must have a state' ]
    },
    district: {
        type: String,
        required: [true, 'Every User must have a district' ]
    },
    Tehsil: {
        type: String,
        required: [true, 'Every User must have a Tehsil' ]
    },
    address: {
        type: String,
        required: [true, 'Every User must have a address' ]
    },
    privateKey: {
        type: String,
        unique: true,
        required: [true, 'Every User must have a private key' ]
    },
    password: {
        type: String,
    },
    medical: {
        info: []
    }
});
module.exports = mongoose.model('user', user);
