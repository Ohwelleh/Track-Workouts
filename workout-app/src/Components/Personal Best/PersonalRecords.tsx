// Component import
import { PersonalButtons } from './PersonalButtons'


// Styling import
import './Personal Best Styles/personalStyles.css'

// Mock data for test
import { PersonalMock } from '../../Mock Data/MockData'

export function PersonalRecords(){
    return(
        <div className='personalBestMainDiv'>
            <div className='personalBestTitle'>
                <PersonalButtons />
            </div>
            <div className='personalBestRecords'>
                {PersonalMock.map((exercise) => {
                    return(
                        <div className="personalBestEntries">
                            <div className='personalDate'><p>{exercise.date}</p></div>
                            <div className='personalExercise'><p>{exercise.exercise}</p></div>
                            <div className='personalWeight'><p>{exercise.weight}</p></div>
                            <div className='personalBTNS'>
                                <button className='editBTN'>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}