
// Custom data types
import { Exercise } from './Custom Data Types/CustomData'

// Style imports
import './Workouts Styles/bodyStyles.css'

// Component for testing Mock data.
// name: string,
//     weight: number,
//     reps: number,
//     sets: number,
function ExerciseInfo(exerciseProp: {exercise: Exercise}){
    return(
        <div>
            <p>{exerciseProp.exercise.name}, {exerciseProp.exercise.weight}, {exerciseProp.exercise.reps}, {exerciseProp.exercise.sets}</p>
        </div>
    );}



export function ListItemBody(bodyProps: {date: string, exercises: Exercise[]}){
    return(
        <div className="workoutBody">
            <div>
                <h4>{bodyProps.date}.</h4>
            </div>
            {bodyProps.exercises.map((exercise) => {
                return <ExerciseInfo exercise={exercise} />;
            })}
        </div>

    )
}