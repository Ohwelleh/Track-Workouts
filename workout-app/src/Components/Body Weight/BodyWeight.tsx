// Components import
import { WeightEntry } from "./WeightEntry"
import { GraphArea } from "./GraphArea"

// Styling import
import './Body Weight Styles/bodyStyles.css'

// Mock Data for Testing
import { WeightMock } from "../../Mock Data/MockData"

export function BodyWeight(){
    return(
        <div className='bodyMainDiv'>
            <div className="workoutEntry">
                <button className='weightAddBTN'><h2>Add</h2></button>
                {WeightMock.map((entries, key) => {
                    return(
                        <WeightEntry key={key} date={entries.date} weight={entries.weight}/>
                    )
                })}
            </div>
            <GraphArea />            
        </div>
    )
}