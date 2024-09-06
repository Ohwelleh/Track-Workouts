import express from "express"
import * as WorkoutController from "../controllers/workouts"

const router = express.Router()

// Get request for all workouts
router.get("/", WorkoutController.getWorkouts)

// Get request for a specific workout
router.get("/:workoutID", WorkoutController.getWorkout)

// Can use the same end point when using different HTTP methods
router.post("/", WorkoutController.createWorkout)

// Route for updating a specific workout
router.patch("/:workoutID", WorkoutController.updateWorkout)

router.delete("/:workoutID", WorkoutController.deleteWorkout)

export default router