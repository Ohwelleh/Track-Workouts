// Component imports.
import { ListItem } from './ListItem'
import { ListItemBody } from './ListItemBody'

// Style imports.
import './Workouts Styles/workoutStyles.css'

export function Workouts(){
    return(
        <div className='workoutsMain'>
            <ListItem />
            <ListItemBody />
        </div>
    )
}
