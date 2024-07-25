// Styling import
import './Body Weight Styles/entryStyles.css'

export function WeightEntry(entryProp: {date: string, weight: string}){
    return(
        <div className="entryDiv">
            <h2>{entryProp.date}</h2>
            <h2>{entryProp.weight}</h2>
        </div>
    )
}