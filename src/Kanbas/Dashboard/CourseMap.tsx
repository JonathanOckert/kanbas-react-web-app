import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { enrollments } from "../Database";
import { useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import FacultyButtons from "./FacultyButtons";
import StudentButtons from "./StudentButtons";

export default function CourseMap({
    courses,
    enrollments,
    showEnrollmentView,
}: {
    courses: any[];
    enrollments: any[];
    showEnrollmentView: Boolean;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    //const { enrollments } ;

    const [course, setCourse] = useState<any>(courses);

    const faculty = currentUser.role == "FACULTY";

    return (
        <div>
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter(
                            (course) =>
                                faculty ||
                                (!faculty && !showEnrollmentView) ||
                                (!faculty &&
                                    showEnrollmentView &&
                                    enrollments.some(
                                        (enrollment) =>
                                            enrollment.user === currentUser._id && enrollment.course === course._id
                                    ))
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
                                            {faculty && <FacultyButtons course={course} />}
                                            {!faculty && (
                                                <StudentButtons
                                                    course={course}
                                                    user={currentUser}
                                                    enrollments={enrollments}
                                                    showEnrollmentView={showEnrollmentView}
                                                />
                                            )}
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
