const mongoose = require('mongoose')
var validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowecase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid!')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowercase().includes('password')) {
//                 throw new Error('Password must not contain password')
//             }
//         }

//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number!')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'Elham',
//     email: 'Elham@gmail.com',
//     password: '14567password',
//     age: 30
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error:', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         require: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: 'Go shoppinggit',

// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error:', error)
// }) 