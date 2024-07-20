
// Custom data types
import { Exercise, Workout} from './Custom Data Types/CustomData'

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



export function ListItemBody(bodyProps: { workoutID: number, workout: Workout}){
    return(
        <div className="workoutBody">
            <div>
                <h4>{bodyProps.workout.date}.</h4>
            </div>
            {bodyProps.workout.exercise.map((exercise, key) => {
                return <ExerciseInfo key={key} exercise={exercise} />;
            })}
        </div>

    )
}