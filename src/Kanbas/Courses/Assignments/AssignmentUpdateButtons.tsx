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
import * as assignmentsClient from "./client";
import axios from "axios";

export default function AssignmentUpdateButtons({
    assignment,
    assignmentId,
}: //removeAssignment,
//editAssignment,
{
    assignment: any;
    assignmentId: string;
    //removeAssignment: (assignmentId: string) => void;
    //editAssignment: (assignmentId: string, assignmentEdit: any) => void;
}) {
    const dispatch = useDispatch();

    const [assignmentEdit, setAssignmentEdit] = useState(assignment);

    const { pathname } = useLocation();

    const cid = pathname.split("/")[3];

    const navigate = useNavigate();

    const [assignmentToDelete, setAssignmentToDelete] = useState<null | any>(null);

    // const updateAssignment = async (assignmentId: string, assignmentName: string, cid: string) => {
    //     if (!cid) return;
    //     const updatedAssignment = { name: assignmentName, course: cid };
    //     const assignment = await assignmentsClient.updateAssignment(assignmentId, updatedAssignment);
    //     dispatch(editAssignment(assignment));
    //     //return assignment;
    // };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setAssignmentToDelete(assignment);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="float-end">
            <a
                className="text-primary me-3"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}/Edit`}
                // onClick={() => dispatch(editAssignment(assignmentId))}
                //onClick={() => editAssignment(assignment._id, assignmentEdit)}
            >
                <FaPencil />
            </a>
            <FaTrash
                id="delete-assignment-btn"
                className="text-danger me-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target="#wd-delete-assignment-dialog"
                onClick={openModal} //setAssignmentToDelete(assignment)}
                //deleteModule
            />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            {/* {isModalOpen && assignmentToDelete && ( */}
            <DeleteAssignment
                assignmentId={assignment._id}
                //removeAssignment={removeAssignment}
                //resetAssignmentState={() => setAssignmentToDelete(null)}
                closeModal={closeModal}
            />
            {/* )} */}
        </div>
    );
}
