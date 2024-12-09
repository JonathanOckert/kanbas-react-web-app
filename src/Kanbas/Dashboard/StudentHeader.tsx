import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useSelector } from "react-redux";
import { addNewCourse, deleteCourseReducer, updateCourse } from "../Courses/reducer";

export default function StudentHeader({
    courses,
    showEnrollmentView,
    setShowEnrollmentView,
}: {
    courses: any[];
    showEnrollmentView: Boolean;
    setShowEnrollmentView: Dispatch<SetStateAction<boolean>>;
}) {
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
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => setShowEnrollmentView(!showEnrollmentView)}
                >
                    {showEnrollmentView ? "See All" : "See Enrollments"}
                </button>
            </h5>{" "}
            <br />
        </div>
    );
}
