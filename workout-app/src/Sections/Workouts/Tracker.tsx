import './workoutStyles.css'
export function Tracker(){
    return(
        <>
            <div>
                <h1 className="trackerTitle">Track Workouts</h1>
            </div>
            <div>
                {/* Might be worth making these two divs as separate components. */}
                <p className='trackerBody'>This section will allow the user to input the exercises from a workout.</p>
            </div>
        </>
    )
}
