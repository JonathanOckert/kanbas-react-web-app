import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";

export default function FacultyHeader({ courses }: { courses: any[] }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;

    const [course, setCourse] = useState<any>(courses);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>
                New Course
                <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                    Add
                </button>
                <button className="btn btn-warning me-2 float-end" id="wd-update-course-click" onClick={updateCourse}>
                    Update
                </button>
            </h5>{" "}
            <br />
            <input
                value={course.name}
                className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
                defaultValue={course.description}
                className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
            />
        </div>
    );
}
