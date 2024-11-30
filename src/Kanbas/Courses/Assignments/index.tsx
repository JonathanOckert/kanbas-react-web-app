import { BsGripVertical } from "react-icons/bs";
import { FaM, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import AssignmentControls from "./AssignmentControls";
import AssignmentUpdateButtons from "./AssignmentUpdateButtons";

export default function Assignments() {
    const { cid } = useParams();
    //const assignments = db.assignments;
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <br />

            <li
                id="wd-assignments-list"
                className="wd-module list-group-item p-0
                    mb-5 fs-5 border gray"
            >
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical />
                    ASSIGNMENTS 40% of Total
                    {/* <ModuleControlButtons
                        moduleId={""}
                        deleteModule={function (moduleId: string): void {
                            throw new Error("Function not implemented.");
                        }}
                        editModule={function (moduleId: string): void {
                            throw new Error("Function not implemented.");
                        }}
                    /> */}
                </div>
                <ul id="wd-assignments" className="list-group rounded-0">
                    {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-grey">
                                <div className="row g-4">
                                    <div className="col col-2">
                                        <AssignmentControlButtons />
                                    </div>
                                    <div className="col col-7">
                                        <a
                                            className="wd-assignment-link text-black text-decoration-none"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        >
                                            <b>{assignment.title}</b>
                                        </a>
                                        <br />
                                        <span className="text-danger">{assignment.modules}</span> |{" "}
                                        <b>Not available until </b>
                                        {assignment.availability} | <b>Due</b> {assignment.due_date} |{" "}
                                        {assignment.points} pts
                                    </div>
                                    <div className="col col-3">
                                        <AssignmentUpdateButtons
                                            assignment={assignment}
                                            assignmentId={assignment._id}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </li>
        </div>
    );
}
