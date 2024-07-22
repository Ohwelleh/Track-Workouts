// React hooks
import { useState } from 'react'

// Component imports.
import { ListItem } from './ListItem'
import { ListItemBody } from './ListItemBody'

// Style imports.
import './Workouts Styles/workoutStyles.css'

// Mock Data import
import { WorkoutsMock, TestMock, WorkoutMock } from '../../Mock Data/MockData'
import { Fragment } from 'react/jsx-runtime'

export function Workouts(){
    const initalStateVal: WorkoutMock = {
        workoutID: 0,
        workout: {
            date: "Place holder", 
            exercise: [
                {name: "Place holder", weight: -225, reps: -10, sets: -4},
            ]
        },
    }
    const [workoutInfo, setWorkoutInfo] = useState<WorkoutMock>(initalStateVal)
    
    return(
        <div className='gridContainer'>
            <div className='workoutGrid'>
                <div key={'workoutsDateDiv'} className='workoutDate'>
                    {WorkoutsMock.map((workout) => {
                        return (
                            <Fragment key={workout.workoutID}>
                                <button className="dateBTN" onClick={e => setWorkoutInfo(workout)}>
                                    <ListItem key={workout.workoutID} workID={workout.workoutID} date={workout.workout.date}/>
                                </button>
                            </Fragment>
                        )
                    })}
                </div>
                <div key={'workoutsBodyDiv'} className='workoutBody'>
                    <ListItemBody key={workoutInfo.workoutID} workoutID={workoutInfo.workoutID} workout={workoutInfo.workout} />
                    {/* {WorkoutsMock.map((workout) => {
                            return (
                                <Fragment key={workout.workoutID}>
                                    <ListItemBody key={workout.workoutID} workoutID={workout.workoutID} workout={workout.workout}/>
                                </Fragment>
                            )
                    })} */}
                </div>
            </div>
        </div>
    )
}
