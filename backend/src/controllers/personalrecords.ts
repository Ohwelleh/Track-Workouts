import { RequestHandler } from "express"
import PersonalRecordModel from "../models/personalRecord"
import { PersonalRecordBody, UpdatePersonalRecordParams } from "./controllerInterfaces"
import createHttpError from "http-errors"
import mongoose from "mongoose"


// Helper functions
function ValidPersonalRecordId(id: string){
    if(!mongoose.isValidObjectId(id)){
        throw createHttpError(400, "Invalid personalRecord ID")
    }
}

function RequiredDatePassed(date: string | undefined){
    if(!date){
        throw createHttpError(400, "PersonalRecord must have a date")
    }
}


export const getPersonalRecords: RequestHandler = async (req, res, next) => {
    try {
        const personalRecords = await PersonalRecordModel.find().exec()
        res.status(200).json(personalRecords)
    } catch (error) {
        next(error)
    }
}

export const getPersonalRecord: RequestHandler = async (req, res, next) =>{
    
    const personalRecordID = req.params.personalRecordID
    
    try {

        // Checking if the personalRecordID is the correct format
       ValidPersonalRecordId(personalRecordID)


        const personalRecord = await PersonalRecordModel.findById(personalRecordID).exec()

        // Checking if a personalRecord was returned
        if(!personalRecord){
            throw createHttpError(404, "PersonalRecord not found")
        }

        res.status(200).json(personalRecord)
        
    } catch (error) {
        next(error)
    }
}


export const createPersonalRecord: RequestHandler<unknown, unknown, PersonalRecordBody, unknown> = async (req, res, next) =>{
    
    const date = req.body.date
    const exercises = req.body.exercises

    try {
        
        RequiredDatePassed(date)

        const newPersonalRecord = await PersonalRecordModel.create({
            date: date,
            exercises: exercises
        })

        res.status(201).json(newPersonalRecord)

    } catch (error) {
        next(error)
    }
}


export const updatePersonalRecord: RequestHandler<UpdatePersonalRecordParams, unknown, PersonalRecordBody, unknown> = async (req, res, next) =>{

    const personalRecordID = req.params.personalRecordID
    const newDate = req.body.date
    const newExercises = req.body.exercises

    try {
        
        ValidPersonalRecordId(personalRecordID)
        RequiredDatePassed(newDate)

        const personalRecord = await PersonalRecordModel.findById(personalRecordID).exec()
        
        if(!personalRecord){
            throw createHttpError(404, "PersonalRecord not found")
        }

        personalRecord.date = newDate!
        personalRecord.exercises = newExercises!

        const updatedPersonalRecord = await personalRecord.save()

        res.status(200).json(updatedPersonalRecord)

    } catch (error) {
        next(error)
    }
}

export const deletePersonalRecord: RequestHandler = async(req, res, next)=>{

    const personalRecordID = req.params.personalRecordID

    try {
        ValidPersonalRecordId(personalRecordID)
        const personalRecord = await PersonalRecordModel.findById(personalRecordID).exec()

        if(!personalRecord){
            throw createHttpError(404, "PersonalRecord not found")
        }

        await personalRecord.deleteOne({_id: personalRecordID})

        res.sendStatus(204)
        
    } catch (error) {
        next(error)
    }
}