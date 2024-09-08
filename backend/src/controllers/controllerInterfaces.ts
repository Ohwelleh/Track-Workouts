import mongoose from "mongoose";

export interface WorkoutBody {
    date?: string,
    exercises?: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        weight?: number | null | undefined;
        reps?: number | null | undefined;
        sets?: number | null | undefined;
    }>
}

export interface UpdateWorkoutParams{
    workoutID: string
}



export interface PersonalRecordBody {
    date?: string,
    exercises?: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        weight?: number | null | undefined;
        reps?: number | null | undefined;
        sets?: number | null | undefined;
    }>
}

export interface UpdatePersonalRecordParams{
    personalRecordID: string
}




export interface BodyWeightBody {
    data:{x: string,
        y: number}
}

export interface UpdateBodyWeightParams{
    bodyWeightID: string
}