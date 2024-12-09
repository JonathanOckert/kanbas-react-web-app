import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FacultyHeader from "./FacultyHeader";
import StudentHeader from "./StudentHeader";
import CourseMap from "./CourseMap";
import { editAssignment } from "../Courses/Assignments/reducer";

export default function Dashboard({
    courses,
    enrollments,
    // course,
    // setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    enrollments: any[];
    // course: any;
    // setCourse: (course: any) => void;
    addNewCourse: (course: any) => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: (course: any) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    //const { enrollments } = db;

    //state var for enrollmentView and pass to studentheader and then

    const [showEnrollmentView, setShowEnrollmentView] = useState(true);

    const faculty = currentUser.role == "FACULTY";

    return (
        <div id="wd-dashboard">
            {faculty && (
                <FacultyHeader
                    courses={courses}
                    addNewCourse={addNewCourse}
                    // deleteCourse={deleteCourse}
                    // updateCourse={updateCourse}
                />
            )}
            {!faculty && (
                <StudentHeader
                    courses={courses}
                    showEnrollmentView={showEnrollmentView}
                    setShowEnrollmentView={setShowEnrollmentView}
                />
            )}
            <CourseMap
                courses={courses}
                enrollments={enrollments}
                showEnrollmentView={showEnrollmentView}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
            />
            {/* {faculty && <CourseMap courses={courses} />}
            {!faculty && <CourseMap courses={courses} />} */}
        </div>
    );
}
