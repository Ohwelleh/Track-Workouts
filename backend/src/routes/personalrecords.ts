import express from "express"
import * as PersonalRecordController from "../controllers/personalrecords"

const router = express.Router()

// Get request for all workouts
router.get("/", PersonalRecordController.getPersonalRecords)

// Get request for a specific workout
router.get("/:workoutID", PersonalRecordController.getPersonalRecord)

// // Can use the same end point when using different HTTP methods
// router.post("/", PersonalRecordController.createWorkout)

// // Route for updating a specific workout
// router.patch("/:workoutID", PersonalRecordController.updateWorkout)

// router.delete("/:workoutID", PersonalRecordController.deleteWorkout)

export default router