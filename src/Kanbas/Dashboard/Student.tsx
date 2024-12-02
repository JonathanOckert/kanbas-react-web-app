import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";

export default function Student({ courses }: { courses: any[] }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;

    const [course, setCourse] = useState<any>(courses);

    let viewStatus = false;

    const changeViewStatus = () => {
        viewStatus = !viewStatus;
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>
                {/*onClick={changeViewStatus()*/}
                <button className="btn btn-primary float-end" id="wd-add-new-course-click">
                    Enrollments
                    {/* {viewStatus && <allStudentCourses />} */}
                </button>
            </h5>{" "}
            <br />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter((course) =>
                            enrollments.some(
                                (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
                            )
                        )
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link
                                        className="wd-dashboard-course-link 
                                                text-decoration-none text-dark"
                                        to={`/Kanbas/Courses/${course._id}/Home`}
                                    >
                                        <img src="/images/reactjs.jpg" width="100%" height={160} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                            <p
                                                className="wd-dashboard-course-title card-text
                                                    overflow-y-hidden"
                                                style={{ maxHeight: 100 }}
                                            >
                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary">Go</button>
                                            <button
                                                className="btn btn-danger float-end"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="btn btn-warning me-2 float-end"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                id="wd-edit-course-click"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
