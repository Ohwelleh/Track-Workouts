import { RequestHandler } from "express"
import BodyWeightModel from "../models/weight"
import { BodyWeightBody, UpdateBodyWeightParams } from "./controllerInterfaces"
import createHttpError from "http-errors"
import mongoose from "mongoose"


// Helper functions
function ValidBodyWeightId(id: string){
    if(!mongoose.isValidObjectId(id)){
        throw createHttpError(400, "Invalid bodyWeight ID")
    }
}

function RequiredDatePassed(date: string | undefined){
    if(!date){
        throw createHttpError(400, "BodyWeight must have a date")
    }
}


export const getBodyWeights: RequestHandler = async (req, res, next) => {
    try {
        const bodyWeights = await BodyWeightModel.find().exec()
        res.status(200).json(bodyWeights)
    } catch (error) {
        next(error)
    }
}

export const getBodyWeight: RequestHandler = async (req, res, next) =>{
    
    const bodyWeightID = req.params.bodyWeightID
    
    try {

        // Checking if the bodyWeightID is the correct format
       ValidBodyWeightId(bodyWeightID)


        const bodyWeight = await BodyWeightModel.findById(bodyWeightID).exec()

        // Checking if a bodyWeight was returned
        if(!bodyWeight){
            throw createHttpError(404, "BodyWeight not found")
        }

        res.status(200).json(bodyWeight)
        
    } catch (error) {
        next(error)
    }
}



export const createBodyWeight: RequestHandler<unknown, unknown, BodyWeightBody, unknown> = async (req, res, next) =>{
    
    const date = req.body.data.x
    const exercises = req.body.data.y

    try {
        
        RequiredDatePassed(date)

        const newBodyWeight = await BodyWeightModel.create({
            date: date,
            exercises: exercises
        })

        res.status(201).json(newBodyWeight)

    } catch (error) {
        next(error)
    }
}


export const updateBodyWeight: RequestHandler<UpdateBodyWeightParams, unknown, BodyWeightBody, unknown> = async (req, res, next) =>{

    const bodyWeightID = req.params.bodyWeightID
    const newDate = req.body.data.x
    const newExercises = req.body.data.y

    try {
        
        ValidBodyWeightId(bodyWeightID)
        RequiredDatePassed(newDate)

        const bodyWeight = await BodyWeightModel.findById(bodyWeightID).exec()
        
        if(!bodyWeight){
            throw createHttpError(404, "BodyWeight not found")
        }

        // bodyWeight.x = newDate!
        // bodyWeight.y = newExercises!

        const updatedBodyWeight = await bodyWeight.save()

        res.status(200).json(updatedBodyWeight)

    } catch (error) {
        next(error)
    }
}

export const deleteBodyWeight: RequestHandler = async(req, res, next)=>{

    const bodyWeightID = req.params.bodyWeightID

    try {
        ValidBodyWeightId(bodyWeightID)
        const bodyWeight = await BodyWeightModel.findById(bodyWeightID).exec()

        if(!bodyWeight){
            throw createHttpError(404, "BodyWeight not found")
        }

        await bodyWeight.deleteOne({_id: bodyWeightID})

        res.sendStatus(204)
        
    } catch (error) {
        next(error)
    }
}