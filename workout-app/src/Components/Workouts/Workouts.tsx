// Component imports.
import { ListItem } from './ListItem'
import { ListItemBody } from './ListItemBody'

// Style imports.
import './Workouts Styles/workoutStyles.css'

// Mock Data import
import { WorkoutsMock } from '../../Mock Data/MockData'

export function Workouts(){
    
    return(
        <div className='workoutsMain'>
            {WorkoutsMock.map((workout) => {
                return (
                    <>
                        <ListItem workID={workout.workoutID} date={workout.date}/>
                        <ListItemBody date={workout.date} exercises={workout.exercise}/>
                    </>
                )
            })}
        </div>
    )
}
