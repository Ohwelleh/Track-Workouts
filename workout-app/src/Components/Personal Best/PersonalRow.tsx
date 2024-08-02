// Hook import
import { useState, useReducer, MouseEventHandler } from 'react'


export function PersonalRow(rowProps : {id: number, date: string, exercise: string, weight: string, deleteHandler: (id: number)=> void }){
    const [editShow, setEditShow] = useState<boolean>(false)
    
    return (
        <div key={rowProps.id + 0.1} className="personalBestEntries">
            <div key={rowProps.id + 0.2} className='personalDate' contentEditable={editShow}>{rowProps.date}</div>
            <div key={rowProps.id + 0.3} className='personalExercise' contentEditable={editShow}>{rowProps.exercise}</div>
            <div key={rowProps.id + 0.4} className='personalWeight' contentEditable={editShow}>{rowProps.weight}</div>
            <div className='personalBTNS'>
                <button key={rowProps.id + 0.5} className='editBTN' onClick={() => setEditShow(!editShow)}>Edit</button>
                <button key={rowProps.id + 0.6} onClick={() => {rowProps.deleteHandler(rowProps.id)}}>Delete</button>
            </div>
        </div>
    )
} 