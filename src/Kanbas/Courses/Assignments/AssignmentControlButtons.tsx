import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import AssignmentEditor from "./AssignmentEditor";

export default function AssignmentControlButtons() {
    return (
        <div className="float-start">
            <BsGripVertical />
            &nbsp; {/*shecodes.io/athena: 'how to create space between icons'*/}
            <GiNotebook className="text-success" />
        </div>
    );
}
