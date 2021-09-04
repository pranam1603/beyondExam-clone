import React, { useState } from 'react'
import { FiCopy, FiClock, FiChevronDown } from "react-icons/fi";
import { useFetchCourse } from '../context/fetchApi';
import SingleModule from './SingleModule';

const Module = () => {

    const {course} = useFetchCourse()
    const { total_time, video_count, modules = [] } = course

    return (
    <>
        <div className="course-module">
            <div className="starter">
                <h2>What's inside the course?</h2>
                <p><span><FiCopy/></span>{`${video_count}`} Videos <span><FiClock/></span>{`${total_time}`} minutes</p>
                </div>
                {modules.map((module, index) => {
                    console.log(module);
                    return (
                        <SingleModule key={index} index={index} {...module} />
                    )
                })}
        </div>
    </>
    )
}

export default Module
