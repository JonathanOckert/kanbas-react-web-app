import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import { useLocation, useParams } from "react-router";

export default function DeleteAssignment({ assignment }: { assignment: any | undefined }) {
    const dispatch = useDispatch();

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
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => dispatch(deleteAssignment(assignment._id))}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
