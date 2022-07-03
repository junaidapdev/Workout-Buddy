const express = require("express")


const router = express.Router()

// GET all Workouts
router.get('/', (res, req) => {
    res.json({msg: "Get all Workouts"})
})

// GET a Single Workout
router.get('/:id', (req, res) => {
    res.json({msg: "Get a Single Workout"})
})

// POST a Single Workout
router.post('/', (req, res) => {
    res.json({msg: "Post a New Workout"})
})

// DELETE a Single Workout
router.delete('/:id', (req, res) => {
    res.json({msg: "Delete a Single Workout"})
})

// UPDATE a Workout
router.patch('/:id', (req, res) => {
    res.json({msg: "Update a Single Workout"})
})


module.exports = router