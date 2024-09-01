import { RequestHandler } from "express"
import WorkoutModel from "../models/workout"

export const getWorkouts: RequestHandler = async (req, res, next) => {
    try {
        const workouts = await WorkoutModel.find().exec()
        res.status(200).json(workouts)
    } catch (error) {
        next(error)
    }
}

export const getWorkout: RequestHandler = async (req, res, next) =>{
    
    const workoutID = req.params.workoutID
    
    try {
        const workout = await WorkoutModel.findById(workoutID).exec()
        res.status(200).json(workout)
        
    } catch (error) {
        next(error)
    }
}

export const createWorkout: RequestHandler = async (req, res, next) =>{
    
    const date = req.body.date
    const exercises = req.body.exercises

    try {
        
        const newWorkout = await WorkoutModel.create({
            date: date,
            exercises: exercises
        })

        res.status(201).json(newWorkout)

    } catch (error) {
        next(error)
    }
}