var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: "Cook Dinner"
// });

// var newTodo = new Todo({
//     text: "I'm Hungry"
// })

// newTodo.save().then(
//     res => console.log(res),
//     err => console.log("Error: ", err)
// )

module.exports = { Todo }