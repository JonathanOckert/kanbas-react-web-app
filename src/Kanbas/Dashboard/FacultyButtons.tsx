import { useState } from "react";
import { deleteCourseReducer, updateCourse, editCourse } from "../Courses/reducer";
import { useDispatch } from "react-redux";

export default function FacultyButtons({
    course,
    deleteCourse,
    //editCourse,
    courseEditingActive,
}: {
    course: any;
    deleteCourse: (courseId: string) => void;
    //editCourse: (courseId: string) => void;
    courseEditingActive: boolean;
}) {
    const [setCourse] = useState<any>(course);

    const dispatch = useDispatch();

    return (
        <>
            <button
                className="btn btn-danger float-end"
                onClick={(event) => {
                    event.preventDefault();
                    console.log(course);
                    //dispatch(deleteCourseReducer(course._id));
                    deleteCourse(course._id);
                    window.location.reload();
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
                    //dispatch(updateCourse(course));
                    //dispatch(editCourse(course._id)); //(course);
                    courseEditingActive = !courseEditingActive;
                    if (courseEditingActive) {
                        dispatch(editCourse(course._id));
                    }
                    // if (courseEditingActive) {
                    //     state.courses = state.modules.map((c: any) => (c._id === course._id ? { ...c, editing: true } : c)) as any;
                    //     {...course, editing: true};
                    // }
                }}
                id="wd-edit-course-click"
            >
                Edit
            </button>
            {/*circle back*/}
        </>
    );
}

{
    /* <li key={module._id}>
                            {module.editing ? (
                                <input
                                    className="form-control w-50 d-inline-block"
                                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({ ...module, editing: false });
                                            // dispatch(updateModule({ ...module, editing: false }));
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            ) : (
                                module.name
                            )} */
}
