const express = require("express")
const Workout = require("../models/workoutModel")

const router = express.Router()

// GET all Workouts
router.get('/', (req, res) => {
    res.json({msg: "Get all Workouts"})
})

// GET a Single Workout
router.get('/:id', (req, res) => {
    res.json({msg: "Get a Single Workout"})
})

// POST a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
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