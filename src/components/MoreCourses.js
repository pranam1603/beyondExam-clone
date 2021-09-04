import React from 'react'
import { useFetchCourse } from '../context/fetchApi'

const Reviews = () => {
    const { course } = useFetchCourse()
    const { creator = {} } = course
    const { name = "pranam" } = creator
    return (
        <div className="more-courses">
            <h1>More courses from <span>{`"${name}"`}</span></h1>
            <div className="course-container">
                <div className="card">
                    <div className="course-thumb">
                        <img src="https://api.beyondexams.org/category/images/1622290474.png" />
                    </div>
                    <h2>Introduction to REACT JS</h2>
                    <p>18 Videos</p>
                </div>
                <div className="card">
                    <div className="course-thumb">
                        <img src="https://api.beyondexams.org/category/images/1622290474.png" />
                    </div>
                    <h2>Introduction to REACT JS</h2>
                    <p>12 Videos</p>
                </div>
                <div className="card">
                    <div className="course-thumb">
                        <img src="https://api.beyondexams.org/category/images/1622290474.png" />
                    </div>
                    <h2>Introduction to REACT JS</h2>
                    <p>9 Videos</p>
                </div>
                <div className="card">
                    <div className="course-thumb">
                        <img src="https://api.beyondexams.org/category/images/1622290474.png" />
                    </div>
                    <h2>Introduction to REACT JS</h2>
                    <p>14 Videos</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
