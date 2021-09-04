import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
const url = "https://api.beyondexams.org/api/v1/get_final_course_details?course_slug=coding-questions-for-tcs-nqt%2C-tcs-ninja%2C-tcs-digital-4d5e2"

const CourseContext = React.createContext()

export const CourseProvider = ({ children }) => {

    const [course, setCourse] = useState(false);

    const fetchApi = async (api) => {
        const response = await axios.get(api);
        const data = response.data.data.course;
        setCourse(data)
    }

    useEffect(() => {
        fetchApi(url)
    }, [])
       
    return <CourseContext.Provider value ={{course}}>
        {children}
    </CourseContext.Provider>
}

export const useFetchCourse = () => {
    return useContext(CourseContext)
} 
