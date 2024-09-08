// React hooks
import { useEffect, useState } from 'react'

// Component imports.
import { ListItem } from './ListItem'
import { ListItemBody } from './ListItemBody'

// Style imports.
import './Workouts Styles/workoutStyles.css'

// Data Model imports.
import { Workout } from '../../Data Models/WorkoutModel'


// Mock Data import
import { WorkoutsMock, WorkoutMock, TestMock } from '../../Mock Data/MockData'
import { Fragment } from 'react/jsx-runtime'

export function Workouts(){

    const [workouts, setWorkouts] = useState<Workout[]>([])


    
    //=========== MOCK DATA SECTION(DELETE ONCE BACKEND IS CONNECTED) =============
    // Initial data for workout body when the page initially loads
    // TODO: implement a way to load the first actual workout instead.
    const initalStateVal: Workout = {
        _id: "0",
        date: "Place holder", 
        exercises: [
                {name: "Place holder", weight: -225, reps: -10, sets: -4},
            ]
    }

    // UseState for populating the workout body div.
    const [workoutInfo, setWorkoutInfo] = useState<Workout>(initalStateVal)

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
        <div className='gridContainer'>
            <div className='workoutGrid'>
                <div key={'workoutsDateDiv'} className='workoutDate'>
                    <div>
                        <button className='dateAddBTN' onClick={handleAdd}><h2 className='addBTNTxT'>Add</h2></button>
                    </div>
                    {workouts.map((workout) => {
                        return (
                            <Fragment key={workout._id}>
                                <button className="dateBTN" onClick={e => setWorkoutInfo(workout)}>
                                    <ListItem key={workout._id} workID={workout._id} date={workout.date}/>
                                </button>
                            </Fragment>
                        )
                    })}
                </div>
                <div key={'workoutsBodyDiv'} className='workoutBody'>
                    <ListItemBody key={workoutInfo._id} workoutID={workoutInfo._id} date={workoutInfo.date} exercises={workoutInfo.exercises!} />
                </div>
            </div>
        </div>
    )
}
