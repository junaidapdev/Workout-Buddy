const express = require("express")
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutController")

const router = express.Router()

// GET all Workouts
router.get('/', getWorkouts)

// GET a Single Workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', deleteWorkout)

// UPDATE a Workout
router.patch('/:id', updateWorkout)


module.exports = router