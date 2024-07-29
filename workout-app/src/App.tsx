// Component imports.
import { Workouts } from './Components/Workouts/Workouts'
import { PersonalRecords } from './Components/Personal Best/PersonalRecords'
import { BodyWeight } from './Components/Body Weight/BodyWeight'

// Styling imports.
import './App.css'

function App() {

  return (
    <>
      <section className='workoutSection'>
        <div>
          <p>This Section will contain the Workout tracker.</p>
        </div>
        <Workouts />
      </section>
      <section className='bodyWeightSection'>
          <BodyWeight />
      </section>
      <section className='personalBestSection'>
        <PersonalRecords />
      </section>
    </>
  )
}

export default App
