import express from "express"
import * as BodyWeightController from "../controllers/bodyweights"

const router = express.Router()

// Get request for all body weights
router.get("/", BodyWeightController.getBodyWeights)

// Get request for a specific body weight
router.get("/:bodyWeightID", BodyWeightController.getBodyWeight)

// Can use the same end point when using different HTTP methods
// router.post("/", BodyWeightController.createWorkout)

// // Route for updating a specific workout
// router.patch("/:bodyWeightID", BodyWeightController.updateWorkout)

// router.delete("/:bodyWeightID", BodyWeightController.deleteWorkout)

export default router