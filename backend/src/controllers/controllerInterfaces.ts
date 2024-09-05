interface Exercise{
    name: String, 
    weight: Number, 
    reps: Number, 
    sets: Number
}

export interface CreateWorkoutBody {
    date?: string,
    exercises?: Exercise[]
}