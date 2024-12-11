import { BiDotsVertical } from "react-icons/bi";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
import QuizEditor from "./QuizEditor";
import { useState } from "react";

export default function QuizDropDownButton() {
    const { cid } = useParams();

    const [optionsOpen, setOptionsOpen] = useState(false);

    const openOptions = () => setOptionsOpen(!optionsOpen);
    const quizStatus = false;
    const quiz = "temp";
    return (
        <div id="wd-quiz-controls" className="dropdown position-absolute p-3">
            <button
                id="wd-quiz-context-btn"
                className="dropdown-toggle btn btn-lg btn-secondary float-end"
                onClick={openOptions}
                aria-controls="wd-quiz-dropdown"
            >
                <BiDotsVertical />
            </button>
            {optionsOpen && (
                <ul className="dropdown-menu" aria-labelledby="wd-quiz-context-btn">
                    <li>
                        <button className="dropdown-item" id="wd-quiz-edit">
                            Edit
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" id="wd-quiz-delete">
                            Delete
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" id="wd-quiz-publish-status">
                            Publish
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
}
