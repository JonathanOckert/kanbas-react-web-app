import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignmentLocally, editAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";
import { useLocation, useParams } from "react-router";

export default function AssignmentEditor({
    dialogTitle,
    assignment,
}: {
    dialogTitle: string;
    assignment: any | undefined;
}) {
    // const [assignmentName, setAssignmentName,
    //         assignmentModules, setAssignmentModules,
    //         assignmentAvailability, setAssignmentAvailability,
    //         assignmentDueDate, setAssignmentDueDate,
    //         assignmentPoints, setAssignmentPoints] = useState("");

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const cid = pathname.split("/")[3];

    const initialState = {
        title: "",
        course: cid,
        modules: "",
        availability: "",
        due_date: "",
        points: "",
    };

    const [formState, setFormState] = useState(assignment ? assignment : initialState);

    const createAssignment = async (cid: string, formState: any) => {
        const assignment = await coursesClient.createAssignment(cid, formState);
        dispatch(addAssignment(assignment));
    };

    return (
        <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <input
                            className="form-control"
                            placeholder="Assignment Name"
                            onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                            value={formState.title}
                        />
                        <input className="form-control" disabled value={formState.course} />
                        <input
                            className="form-control"
                            placeholder="Indicate Number of Modules"
                            onChange={(e) => setFormState({ ...formState, modules: e.target.value })}
                            value={formState.modules}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={(e) => setFormState({ ...formState, availability: e.target.value })}
                            value={formState.availability}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={(e) => setFormState({ ...formState, due_date: e.target.value })}
                            value={formState.due_date}
                        />
                        <input
                            className="form-control"
                            placeholder="100"
                            onChange={(e) => setFormState({ ...formState, points: e.target.value })}
                            value={formState.points}
                        />
                    </div>
                    <div className="module-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button
                            onClick={() => createAssignment(cid, formState)}
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Add Assignment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
