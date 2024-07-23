const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Creat User
app.post('/users', async (req, res) => {

    const user = new User(req.body)

    try {
        await user.save();
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Get Users
app.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Get User by ID
app.get('/users/:id', async (req, res) => {

    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)

    } catch (e) {
        res.status(500).send(e)
    }

})

//Update User by ID
app.patch('/users/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send('Error : Invalid updates!')
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)

    } catch (e) {
        res.status(500).send(e)
    }
})

//Create Task
app.post('/tasks', async (req, res) => {

    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})

//Get Tasks
app.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.send(tasks)

    } catch (e) {
        res.status(500).send(e)
    }

})

//Get Task by ID
app.get('/tasks/:id', async (req, res) => {

    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)

    } catch (e) {
        res.status(500).send()
    }

})

//Update Task by ID
app.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdatess = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdatess.includes(update))


    if (!isValidOperation) {
        return res.status(400).send("Error: Invalid updates!")
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }

})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})