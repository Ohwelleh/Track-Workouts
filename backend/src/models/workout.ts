import { InferSchemaType, Schema, model } from "mongoose";

const workoutSchema = new Schema({
    date: { type: String, required: true },
    exercises: [{ name: String, weight: Number, reps: Number, sets: Number}]
})

type Workout = InferSchemaType<typeof workoutSchema>

export default model<Workout>("Workout", workoutSchema)