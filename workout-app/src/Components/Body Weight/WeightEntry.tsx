// Styling import
import { Points } from '../../Mock Data/MockData'
import './Body Weight Styles/entryStyles.css'

export function WeightEntry(entryProp: {data: Points}){
    return(
        <div className="entryDiv">
            <h2>{entryProp.data.x}</h2>
            <h2>{entryProp.data.y} lbs</h2>
        </div>
    )
}