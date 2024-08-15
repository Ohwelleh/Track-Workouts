import '../Personal Best Styles/personalEditStyles.css'

interface PersonalRecord{
    exercise: string,
    date: string,
    weight: string,
}

export function PersonalEdit(editProp: {personalBest: PersonalRecord}){

    return(
        <div className='editForm'>Here!</div>
    )

}