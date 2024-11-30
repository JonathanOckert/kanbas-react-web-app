import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import AssignmentEditor from "./AssignmentEditor";
import { useDispatch } from "react-redux";
import { deleteAssignment, editAssignment } from "./reducer";
import { Route, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import Editor from "./Editor";
import DeleteAssignment from "./DeleteAssignment";

export default function AssignmentControlButtons({
    assignment,
    assignmentId,
}: {
    assignment: any;
    assignmentId: string;
}) {
    const dispatch = useDispatch();

    const [editingAssignment, setEditingAssignment] = useState(undefined);

    const { pathname } = useLocation();

    const cid = pathname.split("/")[3];

    const navigate = useNavigate();

    return (
        <div className="float-end">
            <a
                className="text-primary me-3"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}/Edit`}
                onClick={() => dispatch(editAssignment(assignmentId))}
            >
                <FaPencil />
            </a>
            <FaTrash
                id="delete-assignment-btn"
                className="text-danger me-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target="#wd-delete-assignment-dialog"
            />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <DeleteAssignment assignment={assignment} />
        </div>
    );
}

{
    /*
//onClick={() => {
// data-bs-toggle="modal"
                // data-bs-target="#wd-add-assignment-dialog"
                // onClick={() => {
                //     console.log(assignment);
                //     setEditingAssignment(assignment);
                //}}

*/
}
