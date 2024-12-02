import { useState } from "react";
import { deleteCourse, updateCourse } from "../Courses/reducer";
import { useDispatch } from "react-redux";

export default function FacultyButtons({ course }: { course: any }) {
    const [setCourse] = useState<any>(course);

    const dispatch = useDispatch();

    return (
        <>
            <button
                className="btn btn-danger float-end"
                onClick={(event) => {
                    event.preventDefault();
                    console.log(course);
                    dispatch(deleteCourse(course._id));
                }}
                id="wd-delete-course-click"
            >
                Delete
            </button>
            <button
                className="btn btn-warning me-2 float-end"
                onClick={(event) => {
                    event.preventDefault();
                    console.log(course);
                    //setCourse(course);
                    dispatch(updateCourse(course));
                }}
                id="wd-edit-course-click"
            >
                Edit
            </button>
        </>
    );
}
