// Hook import
import { useState } from 'react'

// Component import
import { PersonalButtons } from './PersonalButtons'

// Forms import
import { PersonalDelete } from './Personal Form/PersonalDelete'
import { PersonalEdit } from './Personal Form/PersonalEdit'

// Styling import
import './Personal Best Styles/personalStyles.css'

// Mock data for test
import { PersonalMock, PersonalRecord } from '../../Mock Data/MockData'

export function PersonalRecords(){
    const [editShow, setEditShow] = useState<boolean>(false)

    return(
        <div className='personalBestMainDiv'>
            <div className='personalBestTitle'>
                <PersonalButtons />
            </div>
            <div className='personalBestRecords'>
                {PersonalMock.map((exercise, id) => {
                    return(
                        <div className="personalBestEntries">
                            <div className='personalDate'><p>{exercise.date}</p></div>
                            <div className='personalExercise'><p>{exercise.exercise}</p></div>
                            <div className='personalWeight'><p>{exercise.weight}</p></div>
                            <div className='personalBTNS'>
                                <button key={id} className='editBTN' onClick={() => setEditShow(!editShow)}>Edit</button>
                                <button onClick={PersonalDelete} >Delete</button>
                            </div>
                            {editShow && <PersonalEdit personalBest={exercise}/>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}