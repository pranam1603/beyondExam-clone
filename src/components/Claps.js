import React from 'react'
import { useFetchCourse } from '../context/fetchApi'

const Claps = () => {
    const { course } = useFetchCourse()
    const { creator = {} } = course
    const { name = "pranam" } = creator
    return (
    <>
        <div className="claps">
            <h2>Love the Content?</h2>
            <p>Appreciate the content creator by</p>
            <p>making a small contribution</p>
            <button type="button">Klapz</button>
            <p>to <b>{name}</b></p>
        </div>
        <hr/>
    </>    
    )
}

export default Claps
