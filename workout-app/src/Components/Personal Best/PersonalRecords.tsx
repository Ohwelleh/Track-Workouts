
// Component import
import { PersonalButtons } from './PersonalButtons'
import { PersonalRow } from './PersonalRow'

// Forms import
import { PersonalDelete } from './Personal Form/PersonalDelete'
import { PersonalEdit } from './Personal Form/PersonalEdit'

// Styling import
import './Personal Best Styles/personalStyles.css'

// Mock data for test
import { PersonalMock, PersonalRecord } from '../../Mock Data/MockData'
import { MouseEventHandler, useEffect, useState } from 'react'


export function PersonalRecords(){
    const TestingData = PersonalMock
    const [testData, setTestData] = useState<PersonalRecord[]>(TestingData)

    // Update Listener
    useEffect(() => {console.log(testData, '- Has Changed!'), [testData]})

    // Add row
    function handleAdd(){
        var newRow: PersonalRecord = {
            exercise: '',
            weight: '',
            date: ''
        }

        setTestData([...testData, newRow])
    }

    function handleDelete(id: number){
        setTestData(testData.filter((item, index) => index != id))
    }



    return(
        <div className='personalBestMainDiv'>
            <div className='personalBestTitle'>
                {/* <PersonalButtons /> */}
                <button onClick={handleAdd}>Add</button>
            </div>
            <div key={'PRBODY'} className='personalBestRecords'>
                {testData.map((exercise, id) => {
                    return(
                        <PersonalRow key={id} id={id} date={exercise.date} weight={exercise.weight} exercise={exercise.exercise} deleteHandler={handleDelete} />
                    )
                })}
            </div>
        </div>
    )
}