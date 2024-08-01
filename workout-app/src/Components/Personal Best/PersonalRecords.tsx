
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


export function PersonalRecords(){

    return(
        <div className='personalBestMainDiv'>
            <div className='personalBestTitle'>
                <PersonalButtons />
            </div>
            <div className='personalBestRecords'>
                {PersonalMock.map((exercise, id) => {
                    return(
                        <PersonalRow id={id} date={exercise.date} weight={exercise.weight} exercise={exercise.exercise} />
                    )
                })}
            </div>
        </div>
    )
}