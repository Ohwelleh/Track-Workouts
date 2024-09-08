import { InferSchemaType, Schema, model } from "mongoose";

const bodyWeightSchema = new Schema({
    data:[{x: String, y:Number}]
})

type BodyWeight = InferSchemaType<typeof bodyWeightSchema>

export default model<BodyWeight>("Body Weight", bodyWeightSchema)