// React hooks
import { useEffect, useState } from 'react'

// Component imports.
import { ListItem } from './ListItem'
import { ListItemBody } from './ListItemBody'

// Style imports.
import './Workouts Styles/workoutStyles.css'

// Mock Data import
import { WorkoutsMock, WorkoutMock, TestMock } from '../../Mock Data/MockData'
import { Fragment } from 'react/jsx-runtime'
import { Workout } from '../../Data Models/WorkoutModel'

export function Workouts(){

    const [workouts, setWorkouts] = useState<Workout[]>([])


    
    //=========== MOCK DATA SECTION(DELETE ONCE BACKEND IS CONNECTED) =============
    // Initial data for workout body when the page initially loads
    // TODO: implement a way to load the first actual workout instead.
    const initalStateVal: WorkoutMock = {
        workoutID: 0,
        workout: {
            date: "Place holder", 
            exercise: [
                {name: "Place holder", weight: -225, reps: -10, sets: -4},
            ]
        },
    }

    // UseState for populating the workout body div.
    const [workoutInfo, setWorkoutInfo] = useState<WorkoutMock>(initalStateVal)

    // Mock useState for testing the add button function.
    const TestingData = WorkoutsMock
    const [testWork, setTestWork] = useState<WorkoutMock[]>(TestingData)
    const [workoutIDRandom, setWorkoutIDRandom] = useState<number>(234)

    //===========================================================================

    // *******************UPDATE VARAIABLES IN THIS SECTION ONCE BACKEND IS CONNECTED**************
    // Update listener.
    useEffect(() => {
        async function loadWorkouts(){
            try {
                const response = await fetch("/api/workouts/", {method: "GET"})
                console.log(response)
                const dbWorkouts = await response.json()
                setWorkouts(dbWorkouts)
            } catch (error) {
                console.error(error)
                alert(error)
            }
        }
        loadWorkouts()
    }, [])
    
    // Add workout
    function handleAdd(){
        var uniqueID = (workoutIDRandom * 23)
        setWorkoutIDRandom(workoutIDRandom + 1)
        var newWorkout: WorkoutMock = {
            workoutID: uniqueID,
            workout: {
                date: "Jan 1, 2024", 
                exercise: [
                    {name: "Bench", weight: uniqueID, reps: 10, sets: 4},
                    {name: "Incline Bench", weight: 200, reps: 10, sets: 4},
                    {name: "Flys", weight: 25, reps: 10, sets: 4},
                ]
            }
        }

        setTestWork([...testWork, newWorkout])
    }


    return(
        <div>
            {JSON.stringify(workouts)}
        </div>
        // <div className='gridContainer'>
        //     <div className='workoutGrid'>
        //         <div key={'workoutsDateDiv'} className='workoutDate'>
        //             <div>
        //                 <button className='dateAddBTN' onClick={handleAdd}><h2 className='addBTNTxT'>Add</h2></button>
        //             </div>
        //             {testWork.map((workout) => {
        //                 return (
        //                     <Fragment key={workout.workoutID}>
        //                         <button className="dateBTN" onClick={e => setWorkoutInfo(workout)}>
        //                             <ListItem key={workout.workoutID} workID={workout.workoutID} date={workout.workout.date}/>
        //                         </button>
        //                     </Fragment>
        //                 )
        //             })}
        //         </div>
        //         <div key={'workoutsBodyDiv'} className='workoutBody'>
        //             <ListItemBody key={workoutInfo.workoutID} workoutID={workoutInfo.workoutID} workout={workoutInfo.workout} />
        //         </div>
        //     </div>
        // </div>
    )
}
