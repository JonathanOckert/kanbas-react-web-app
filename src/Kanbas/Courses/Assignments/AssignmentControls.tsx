import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentEditor from "./AssignmentEditor";

export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <button
                id="wd-add-assignment-btn"
                className="btn btn-lg btn-danger me-1 float-end"
                data-bs-toggle="modal"
                data-bs-target="#wd-add-assignment-dialog"
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <div id="wd-search-assignment">
                <button className="btn btn-light wd-search-width">
                    <FaMagnifyingGlass />
                    &nbsp;&nbsp;&nbsp;<span>Search...</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

                {/* <button id="wd-add-assignment-btn" className="btn btn-danger me-1 float-end"
                    data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button> */}
                <button id="wd-add-assignment-group" className="btn btn-lg btn-light float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>

            <AssignmentEditor dialogTitle="Add Assignment" assignment={undefined} />
        </div>
    );
}
