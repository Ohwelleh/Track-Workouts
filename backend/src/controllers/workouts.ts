import { RequestHandler } from "express"
import WorkoutModel from "../models/workout"
import { CreateWorkoutBody } from "./controllerInterfaces"
import createHttpError from "http-errors"
import mongoose from "mongoose"

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

        // Checking if the workoutID is the correct format
        if(!mongoose.isValidObjectId(workoutID)){
            throw createHttpError(400, "Invalid workout ID")
        }


        const workout = await WorkoutModel.findById(workoutID).exec()

        // Checking if a workout was returned
        if(!workout){
            throw createHttpError(404, "Workout not found")
        }

        res.status(200).json(workout)
        
    } catch (error) {
        next(error)
    }
}


export const createWorkout: RequestHandler<unknown, unknown, CreateWorkoutBody, unknown> = async (req, res, next) =>{
    
    const date = req.body.date
    const exercises = req.body.exercises

    try {
        
        if(!date){
            throw createHttpError(400, "Workout must have a date")
        }

        const newWorkout = await WorkoutModel.create({
            date: date,
            exercises: exercises
        })

        res.status(201).json(newWorkout)

    } catch (error) {
        next(error)
    }
}