export interface Exercise {
    name: string,
    weight: number,
    reps: number,
    sets: number,
}

export interface Workout {
    date: string,
    exercise: Exercise[]
}