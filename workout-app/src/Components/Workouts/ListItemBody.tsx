
// Custom data types
import { Exercise, Workout} from './Custom Data Types/CustomData'

// Style imports
import './Workouts Styles/bodyStyles.css'

function ExerciseInfo(exerciseProp: {exercise: Exercise}){
    return(
        <div className='exerciseInfoDiv'>
            <div className='exerciseName'>{exerciseProp.exercise.name} </div>
            <div className='exerciseWeight'>{exerciseProp.exercise.weight}</div>
            <div className='exerciseReps'>{exerciseProp.exercise.reps}</div>
            <div className='exerciseSets'>{exerciseProp.exercise.sets}</div>
        </div>
    );}



export function ListItemBody(bodyProps: { workoutID: number, workout: Workout}){
    return(
        <div className="workoutBody">
            <div>
                <h4>{bodyProps.workout.date}.</h4>
            </div>
            <div className='exerciseGridTitle'>
                <div className='exerciseGridName'><h4>Exercise Name</h4></div>
                <div className='exerciseGridWeight'><h4>Weight</h4></div>
                <div className='exerciseGridReps'><h4>Reps</h4></div>
                <div className='exerciseGridSets'><h4>Sets</h4></div>
            </div>
            <div className='exerciseDiv'>
                {bodyProps.workout.exercise.map((exercise, key) => {
                    return <ExerciseInfo key={key} exercise={exercise} />;
                })}
            </div>
        </div>

    )
}