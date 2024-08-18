// React Hooks
import { useEffect, useState } from 'react';


// Custom data types
import { Exercise, Workout} from './Custom Data Types/CustomData'

// Style imports
import './Workouts Styles/bodyStyles.css'

function ExerciseInfo(exerciseProp: {exercise: Exercise, edit: boolean}){
    return(
        <div className='exerciseInfoDiv'>
            <div className='exerciseName' contentEditable={exerciseProp.edit}>{exerciseProp.exercise.name} </div>
            <div className='exerciseWeight' contentEditable={exerciseProp.edit}>{exerciseProp.exercise.weight}</div>
            <div className='exerciseReps' contentEditable={exerciseProp.edit}>{exerciseProp.exercise.reps}</div>
            <div className='exerciseSets' contentEditable={exerciseProp.edit}>{exerciseProp.exercise.sets}</div>
        </div>
    );}



export function ListItemBody(bodyProps: { workoutID: number, workout: Workout}){

    const [testData, setTestData] = useState<Exercise[]>(bodyProps.workout.exercise)
    const [editData, setEditData] = useState<boolean>(false)

    // Update Listener
    useEffect(() => {console.log(testData, '- Has Changed!'), [testData]})

    // Add row
    function handleAdd(){
        var newRow: Exercise = {
            name: '',
            weight: 0,
            reps: 0,
            sets: 0,
        }

        setTestData([...testData, newRow])
    }

    return(
        <div className="workoutBody">
            <div>
                <div contentEditable={editData}><h4>{bodyProps.workout.date}</h4></div>
                <button className='workoutAddBTN' onClick={handleAdd}><h2>Add Exercise</h2></button>
                { !editData && <button className='workoutEditBTN' onClick={() => setEditData(true)}><h2>Edit</h2></button> }
                { editData && <button className='workoutEditBTN' onClick={() => setEditData(false)}><h2>Save</h2></button> }
            </div>
            <div className='exerciseGridTitle'>
                <div className='exerciseGridName'><h4>Exercise Name</h4></div>
                <div className='exerciseGridWeight'><h4>Weight</h4></div>
                <div className='exerciseGridReps'><h4>Reps</h4></div>
                <div className='exerciseGridSets'><h4>Sets</h4></div>
            </div>
            <div className='exerciseContainer'>
                <div className='exerciseDiv'>
                    {testData.map((exercise, key) => {
                        return <ExerciseInfo key={key} exercise={exercise} edit={editData}/>;
                    })}
                </div>
            </div>
        </div>

    )
}