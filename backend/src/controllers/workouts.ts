import { RequestHandler } from "express"
import WorkoutModel from "../models/workout"
import { WorkoutBody, UpdateWorkoutParams } from "./controllerInterfaces"
import createHttpError from "http-errors"
import mongoose from "mongoose"

// Helper functions
function ValidWorkoutId(id: string){
    if(!mongoose.isValidObjectId(id)){
        throw createHttpError(400, "Invalid workout ID")
    }
}

function RequiredDatePassed(date: string | undefined){
    if(!date){
        throw createHttpError(400, "Workout must have a date")
    }
}


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
       ValidWorkoutId(workoutID)


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


export const createWorkout: RequestHandler<unknown, unknown, WorkoutBody, unknown> = async (req, res, next) =>{
    
    const date = req.body.date
    const exercises = req.body.exercises

    try {
        
        RequiredDatePassed(date)

        const newWorkout = await WorkoutModel.create({
            date: date,
            exercises: exercises
        })

        res.status(201).json(newWorkout)

    } catch (error) {
        next(error)
    }
}


export const updateWorkout: RequestHandler<UpdateWorkoutParams, unknown, WorkoutBody, unknown> = async (req, res, next) =>{

    const workoutID = req.params.workoutID
    const newDate = req.body.date
    const newExercises = req.body.exercises

    try {
        
        ValidWorkoutId(workoutID)
        RequiredDatePassed(newDate)

        const workout = await WorkoutModel.findById(workoutID).exec()
        
        if(!workout){
            throw createHttpError(404, "Workout not found")
        }

        workout.date = newDate!
        workout.exercises = newExercises!

        const updatedWorkout = await workout.save()

        res.status(200).json(updatedWorkout)

    } catch (error) {
        next(error)
    }
}

export const deleteWorkout: RequestHandler = async(req, res, next)=>{

    const workoutID = req.params.workoutID

    try {
        ValidWorkoutId(workoutID)
        const workout = await WorkoutModel.findById(workoutID).exec()

        if(!workout){
            throw createHttpError(404, "Workout not found")
        }

        await workout.deleteOne({_id: workoutID})

        res.sendStatus(204)
        
    } catch (error) {
        next(error)
    }
}