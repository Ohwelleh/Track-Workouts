// Component imports.
import { ListItem } from './ListItem'
import { ListItemBody } from './ListItemBody'

// Style imports.
import './Workouts Styles/workoutStyles.css'

// Mock Data import
import { WorkoutsMock, TestMock } from '../../Mock Data/MockData'
import { Fragment } from 'react/jsx-runtime'

export function Workouts(){
    
    return(
        <div className='workoutsMain'>
            <div key={'workoutsDateDiv'} className='workoutDate'>
                {TestMock.map((workout) => {
                    return (
                        <Fragment key={workout.workoutID}>
                            <ListItem key={workout.workoutID} workID={workout.workoutID} date={workout.workout.date}/>
                        </Fragment>
                    )
                })}
            </div>
            <div key={'workoutsBodyDiv'} className='workoutBody'>
                {WorkoutsMock.map((workout) => {
                        return (
                            <Fragment key={workout.workoutID}>
                                <ListItemBody key={workout.workoutID} workoutID={workout.workoutID} workout={workout.workout}/>
                            </Fragment>
                        )
                })}
            </div>
        </div>
    )
}
