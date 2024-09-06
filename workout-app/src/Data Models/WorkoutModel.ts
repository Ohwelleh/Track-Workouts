export interface Workout{
    _id: string,
    date: string,
    exercises?: [{ name: string, weight: number, reps: string, sets: number}]
}