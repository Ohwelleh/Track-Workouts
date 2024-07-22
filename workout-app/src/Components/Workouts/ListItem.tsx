

// Style imports
import './Workouts Styles/itemStyles.css'

export function ListItem(itemProps: {workID: number, date: string}){
    return(
        <div className="workoutItem">
            <h2>{itemProps.workID}</h2>
            <h2>{itemProps.date}</h2>
        </div>
    )
}