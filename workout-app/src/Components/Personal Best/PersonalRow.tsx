// Hook import
import { useState, useReducer } from 'react'


export function PersonalRow(rowProps : {id: number, date: string, exercise: string, weight: string}){
    const [editShow, setEditShow] = useState<boolean>(false)
    
    return (
        <div data-RowKEY={rowProps.id} className="personalBestEntries">
            <div key={rowProps.id} className='personalDate' contentEditable={editShow}>{rowProps.date}</div>
            <div key={rowProps.id} className='personalExercise' contentEditable={editShow}>{rowProps.exercise}</div>
            <div key={rowProps.id} className='personalWeight' contentEditable={editShow}>{rowProps.weight}</div>
            <div className='personalBTNS'>
                <button key={rowProps.id} className='editBTN' onClick={() => setEditShow(!editShow)}>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}