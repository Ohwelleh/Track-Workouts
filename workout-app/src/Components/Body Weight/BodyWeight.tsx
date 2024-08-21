// React Hooks
import { useEffect, useState } from "react"

// Components import
import { WeightEntry } from "./WeightEntry"
import { GraphArea } from "./GraphArea"

// Styling import
import './Body Weight Styles/bodyStyles.css'

// Mock Data for Testing
import { WeightMock, Points, weightData } from "../../Mock Data/MockData"

export function BodyWeight(){

    const initialWeightData : weightData[] =[ 
        {
            id: "Body Weight",
            color: "hsl(113, 70%, 50%)",
            data: [
                {
                    x:"test",
                    y: 123,
                },
                {
                    x:"test2",
                    y: 12,
                },
            ]
            }
        ]

    // Mock Data for testing.
    const [weightState, setWeightData] = useState<weightData[]>(initialWeightData)
    const [randomWeight, setRandWeight] = useState<number>(3)
    const [randomDate, setRandDate] = useState<number>(3)

    // Refresh listener.
    useEffect(() => {console.log(weightState, '- Has Changed.'), [weightState]})

    function handleAdd(){
        var weight = (randomWeight * 3)
        setRandWeight((randomWeight > 30 ? 3 : randomWeight + 7))
        var newWeight : Points = {
            x: "July " + randomDate + ", 2024",
            y: weight
        }
        var newData: weightData[] = [...weightState]
        newData[0].data = [...newData[0].data, newWeight]

        setRandDate(randomDate + 1)
        setWeightData(newData)
    }

    return(
        <div className='bodyMainDiv'>
            <div className="workoutEntry">
                <button className='weightAddBTN' onClick={handleAdd}><h2>Add</h2></button>
                {weightState[0].data.map((entries, key) => {
                    return(
                        <WeightEntry key={key} data={entries} />
                    )
                })}
            </div>
            <GraphArea graphData={weightState}/>            
        </div>
    )
}