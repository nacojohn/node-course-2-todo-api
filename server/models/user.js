var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
});

// var user = new User({
//     name: "John Naco",
//     email: "nacojohn@gmail.com"
// });

// user.save().then(
//     res => console.log(res),
//     err => console.log("Error: ", JSON.stringify(err, null, 2))
// )

module.exports = { User };