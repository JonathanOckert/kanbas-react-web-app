import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useSelector } from "react-redux";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
      deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; 
      }
) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse} >
                            Add
                </button>
                <button className="btn btn-warning me-2 float-end"
                        id="wd-update-course-click"
                        onClick={updateCourse} >
                            Update
                </button>
            </h5> <br/>
            <input value={course.name} className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <textarea defaultValue={course.description} className="form-control"   
                        onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter((course) =>
                            enrollments.some(
                                (enrollment) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link className="wd-dashboard-course-link 
                                                    text-decoration-none text-dark" 
                                                    to={`/Kanbas/Courses/${course._id}/Home`}>
                                        <img src="/images/reactjs.jpg" width="100%" height={160} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text
                                                        overflow-y-hidden" style={{ maxHeight: 100}}>
                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary">
                                                Go
                                            </button>
                                            <button className="btn btn-danger float-end"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    id="wd-delete-course-click">
                                                        Delete
                                            </button>
                                            <button className="btn btn-warning me-2 float-end"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    id="wd-edit-course-click">
                                                        Edit
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div> 
                    ))}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link 
                                            text-decoration-none text-dark" 
                                            to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden"> 
                            <Link className="wd-dashboard-course-link
                                            text-decoration-none text-dark" 
                                            to="/Kanbas/Courses/1234/Home">
                                <img src="/images/cc++.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2234 C & C++
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Base level programmer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                                            text-decoration-none text-dark" 
                                            to="/Kanbas/Courses/1234/Home">
                                <img src="/images/java.jpg" width={"100%"} height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3234 Java
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intro to Objected Oriented Design
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                                            text-decoration-none text-dark" 
                                            to="/Kanbas/Courses/1234/Home">
                                <img src="/images/python.jpg" width={"100%"} height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4234 Python
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fundamentals of Programming
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden"> 
                            <Link className="wd-dashboard-course-link 
                                            text-decoration-none text-dark" 
                                            to="/Kanbas/Courses/1234/Home">
                                <img src="/images/ood.jpg" width={"100%"} height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title
                                                    overflow-hidden">
                                        CS5234 Object Oriented Design
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Advanced OOD
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                                            text-decoration-none text-dark" 
                                            to="/Kanbas/Courses/1234/Home">
                                <img src="/images/algorithm.jpg" width={"100%"} height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS6234 Algorithms
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intro to Algorithmic Thinking
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                                            text-decoration-none text-dark" 
                                            to="/Kanbas/Courses/1234/Home">
                                <img src="/images/ml.jpg" width={"100%"} height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS7234 Machine Learning
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intro to Machine Learning
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>       
            </div>
                            {/*<div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link 
                                                text-decoration-none text-dark" 
                                                to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text
                                                      overflow-y-hidden" style={{ maxHeight: 100}}>
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>    */}
        </div>
    )
}