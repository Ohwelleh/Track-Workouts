// Form import
import { PersonalAdd } from './Personal Form/PersonalAdd'

// Styling import
import './Personal Best Styles/personalStyles.css'

export function PersonalButtons(){
    return(
        <div className='addDiv'>
            <button className='personalAdd' onClick={PersonalAdd}>Add</button>
        </div>
    )
}