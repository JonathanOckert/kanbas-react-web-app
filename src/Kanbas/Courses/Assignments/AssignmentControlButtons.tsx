import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";

export default function AssignmentControlButtons() {
    return (
        <div className="float-start">
            <BsGripVertical />
            &nbsp;  {/*shecodes.io/athena: 'how to create space between icons'*/}
            <GiNotebook className="text-success" />

        </div>
    )
}