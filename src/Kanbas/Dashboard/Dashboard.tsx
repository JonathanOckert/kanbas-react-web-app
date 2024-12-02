import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useSelector } from "react-redux";
import Faculty from "./Faculty";
import Student from "./Student";
import FacultyHeader from "./FacultyHeader";
import StudentHeader from "./StudentHeader";
import CourseMap from "./CourseMap";

export default function Dashboard({
    courses,
    enrollments,
}: // course,
// setCourse,
// addNewCourse,
// deleteCourse,
// updateCourse,
{
    courses: any[];
    enrollments: any[];
    // course: any;
    // setCourse: (course: any) => void;
    // addNewCourse: () => void;
    // deleteCourse: (course: any) => void;
    // updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    //const { enrollments } = db;

    //state var for enrollmentView and pass to studentheader and then

    const [showEnrollmentView, setShowEnrollmentView] = useState(false);

    const faculty = currentUser.role == "FACULTY";

    return (
        <div id="wd-dashboard">
            {faculty && <FacultyHeader courses={courses} />}
            {!faculty && (
                <StudentHeader
                    courses={courses}
                    showEnrollmentView={showEnrollmentView}
                    setShowEnrollmentView={setShowEnrollmentView}
                />
            )}
            <CourseMap courses={courses} enrollments={enrollments} showEnrollmentView={showEnrollmentView} />
            {/* {faculty && <CourseMap courses={courses} />}
            {!faculty && <CourseMap courses={courses} />} */}
        </div>
    );
}
