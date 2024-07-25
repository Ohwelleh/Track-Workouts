// Component imports.
import { Workouts } from './Components/Workouts/Workouts'
import { PersonalRecords } from './Components/Personal Best/PersonalRecords'


// Styling imports.
import './App.css'

function App() {

  return (
    <>
      <section>
        <div>
          <p>This Section will contain the Workout tracker.</p>
        </div>
        <Workouts />
      </section>
      <section>
        <div className="card">
          <p>This Section will contain track body weight.</p>
        </div>
      </section>
      <section>
        <PersonalRecords />
      </section>
    </>
  )
}

export default App
