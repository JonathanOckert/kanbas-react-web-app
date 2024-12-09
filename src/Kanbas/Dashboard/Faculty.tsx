import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useSelector } from "react-redux";
import { addNewCourse, deleteCourseReducer, updateCourse } from "../Courses/reducer";
import CourseMap from "./CourseMap";
import FacultyButtons from "./FacultyButtons";
import StudentButtons from "./StudentButtons";

export default function Faculty({ courses }: { courses: any[] }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;

    const [course, setCourse] = useState<any>(courses);

    const faculty = currentUser.role ? "FACULTY" : "STUDENT";

    return (
        <div id="wd-dashboard">
            {/* <CourseMap courses={courses} /> */}

            {/* {!faculty && <StudentButtons course={course} />} */}
        </div>
    );
}
