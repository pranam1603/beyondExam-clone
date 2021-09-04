import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GoPrimitiveDot, GoInfo } from "react-icons/go";
import { FcApproval } from "react-icons/fc";
import { FaBellSlash } from "react-icons/fa";
import Module from './Module';
import Claps from './Claps';
import MoreCourses from './MoreCourses';
import { useFetchCourse } from '../context/fetchApi';

const Course = () => {

    const { course } = useFetchCourse()
    const { title, description, creator={} } = course;
    const {name="pranam", avator="https://api.beyondexams.org/images/be_logos/instgram%20profile.jpg"} = creator

    return (
        <div className="course">
            <div className="course-intro">
                <div className="course-left">
                    <p><FcApproval/></p>
                </div>
                <div className="course-right">
                    <div className="course-info">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="course-reviews">
                            <p><span className="star"><AiFillStar/></span><b>4.6</b> <span>(181)</span></p>
                            <p className="dotIcon"><GoPrimitiveDot/></p> 
                            <p> <b>1.5K views</b></p>
                            <p className="dotIcon"><GoPrimitiveDot/></p>
                            <p> <span>last updated</span> <b>5 days ago</b></p>
                        </div>
                        <div className="course-btns">
                            <button className="enroll" type="button">Enroll</button>
                            <button type="button">Start Course</button>
                            <button type="button"><span><AiOutlineStar/></span>Rate</button>
                            <button type="button" className="disable" disabled><FaBellSlash/></button>
                        </div>
                        <div className="benefits-link" >
                            <a href="#"><GoInfo/> Benefits of enrollment</a>
                        </div>
                    </div>
                    <div className="course-author">
                        <img className="course-creator" src={avator}/>
                        <p>Created By</p>
                        <p><b>{name}</b></p>
                    </div>
                </div>               
            </div>
            <hr />
            <Module />
            <Claps />
            <MoreCourses/>
        </div>
    )
}

export default Course
