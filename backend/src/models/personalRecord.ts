import { InferSchemaType, Schema, model } from "mongoose";

const PersonalRecordSchema = new Schema({
    exercise: { type: String },
    date: { type: String, required: true },
    exercises: [{ name: String, weight: Number, reps: Number, sets: Number}]
})

type PersonalRecord = InferSchemaType<typeof PersonalRecordSchema>

export default model<PersonalRecord>("Personal Record", PersonalRecordSchema)