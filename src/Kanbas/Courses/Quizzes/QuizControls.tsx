import { BiDotsVertical } from "react-icons/bi";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router";
//import QuizEditor from "./QuizEditor";
import { useState } from "react";
import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { addQuiz } from "./reducer";
import { useDispatch } from "react-redux";

export default function QuizControls() {
    const { pathname } = useLocation();

    const cid = pathname.split("/")[3];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialState = {
        _id: new Date().getTime().toString(),
        name: "New Quiz",
        course: cid,
        quizType: "Graded Quiz", //may need to revisit
        points: 100, //sum of all questions... formula?
        assignmentGroup: "QUIZZES", //list?
        shuffleAnswers: "Yes", //yes/no
        timeLimit: 20, //in minutes
        multipleAttempts: "No", //yes/no
        numAttempts: 1, //if multAtt = yes, then can be other than 1
        showCorrectAnswer: "Yes", //yes/no
        accessCode: "", //optional password protection
        oneQuestionAtATime: "Yes", //yes/no for # of Q to display at a time
        webcamRequired: "No", //yes/no
        lockQuestionsAfterAnswering: "Yes", //yes/no
        dueDate: new Date(),
        availableDate: new Date(),
        untilDate: new Date(),
        status: "Unpublished",
    };

    const [initializedQuiz, setInitializedQuiz] = useState(initialState ? initialState : null);

    const createQuiz = async (cid: string, initialQuiz: any) => {
        try {
            const quiz = await coursesClient.createQuiz(cid, initialQuiz);
            dispatch(addQuiz(quiz));
            console.log("sending to backend quiz object: ", quiz);
            console.log("with id: ", quiz._id);
            navigate(`${pathname}/${quiz._id}/Edit`);
        } catch (error) {
            console.error("Failed to create quiz", error);
        }
    };

    return (
        <div id="wd-quiz-controls" className="text-nowrap">
            <button id="wd-quiz-context-btn" className="btn btn-lg btn-secondary float-end">
                <BiDotsVertical />
            </button>
            {/* <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={() => someLogic}> */}
            <button className="btn btn-lg btn-danger float-end" onClick={() => createQuiz(cid, initializedQuiz)}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </button>
            {/* </button> */}
            <button className="btn btn-light btn-lg wd-search-width">
                <FaMagnifyingGlass />
                &nbsp;&nbsp;&nbsp;<span>Search...</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <br />
            <br />
        </div>
    );
}
