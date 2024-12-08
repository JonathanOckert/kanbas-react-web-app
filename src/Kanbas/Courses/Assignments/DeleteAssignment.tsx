import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignmentLocally, editAssignment } from "./reducer";
import { useLocation, useParams } from "react-router";
import * as assignmentsClient from "./client";
import { Modal, Button } from "react-bootstrap";

export default function DeleteAssignment({
    assignment,
    //assignmentId,
    //removeAssignment,
    //resetAssignmentState,
    closeModal,
}: {
    assignment: any;
    //assignmentId: string;
    //removeAssignment: (assignmentId: string) => void;
    //resetAssignmentState: () => void;
    closeModal: () => void;
}) {
    const dispatch = useDispatch();

    // const removeAssignment = async (assignmentId: string) => {
    //     console.log(assignmentId);
    //     await assignmentsClient.deleteAssignment(assignmentId);
    //     dispatch(deleteAssignment(assignmentId));
    // };

    //console.log(assignment);

    // useEffect(() => {
    //     const modal = new window.bootstrap.Modal(document.getElementById("wd-delete-assignment-dialog"));
    //     modal.show();
    // }, [assignmentId]);

    const { pathname } = useLocation();
    const initialState = {
        title: "",
        course: pathname.split("/")[3],
        modules: "",
        availability: "",
        due_date: "",
        points: "",
    };

    const [assignmentToDelete, setAssignmentToDelete] = useState(assignment ? assignment : initialState);

    console.log("testing testing");
    console.log("Trash can clicked for assignment: ", assignmentToDelete);
    console.log("The assignment variable holds: ", assignment);
    // const removeAssignment = async (assignmentId: string) => {
    //     console.log("the assignment to delete is: ", assignmentId);
    //     await assignmentsClient.deleteAssignment(assignmentId);
    //     dispatch(deleteAssignment(assignmentId));
    // };
    const removeAssignment = async (assignment: any) => {
        console.log("the assignment to delete is: ", assignment);
        await assignmentsClient.deleteAssignment(assignment);
        dispatch(deleteAssignment(assignment._id));
    };
    console.log("end testing");

    return (
        <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabelDelete">
                            Are you sure you want to delete?
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body"></div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                //setAssignmentToDelete(assignment);
                                console.log(assignment._id);
                                console.log("in delete mode");
                                removeAssignment(assignmentToDelete._id);
                                //resetAssignmentState();
                                closeModal();
                            }}
                            //dispatch(deleteAssignment(assignment._id))}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
