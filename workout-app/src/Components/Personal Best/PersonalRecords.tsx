
// Styling import
import './Personal Best Styles/personalStyles.css'

// Mock data for test
import { PersonalMock } from '../../Mock Data/MockData'

export function PersonalRecords(){
    return(
        <div className='personalBestMainDiv'>
            <div className='personalBestTitle'>
                <h3>THIS IS WORKING</h3>
            </div>
            <div className='personalBestRecords'>
                {PersonalMock.map((exercise) => {
                    return(
                        <div className="personalBestEntries">
                            <div><p>{exercise.date}</p></div>
                            <div><p>{exercise.exercise}</p></div>
                            <div><p>{exercise.weight}</p></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}