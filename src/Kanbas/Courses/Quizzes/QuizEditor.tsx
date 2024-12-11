import { Link, Route, Routes, useLocation, useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateQuizLocally } from "./reducer";
import * as coursesClient from "../client";
import axios from "axios";

export default function QuizEditor() {
    const { pathname } = useLocation();
    const cid = pathname.split("/")[3];
    const qid = pathname.split("/")[5];
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    let quiz = quizzes.filter((q: any) => q._id === qid);

    quiz = quiz.length ? quiz[0] : undefined;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const initialState = {
        name: "",
        course: pathname.split("/")[3],
    };

    const [quizEdit, updateQuizEdit] = useState(quiz ? quiz : initialState);

    const formatQuizDate = (date: any) => {
        const tempDate = new Date(date);

        return tempDate.toISOString().slice(0, 16);
    };

    const updateQuiz = async (quizId: string, quizEdit: any) => {
        console.log("Assignment to Edit: ", quizEdit);

        await coursesClient.updateQuizServer(quizId, quizEdit);
        dispatch(updateQuizLocally(quizEdit));
        navigate(-1);
    };

    return (
        <div id="wd-quizzes-editor">
            <label htmlFor="wd-name">
                <h1>
                    <b>{quiz.name}</b>
                </h1>
            </label>{" "}
            <br />
            <br />
            <input
                id="wd-name"
                className="form-control"
                placeholder={quiz.name}
                onChange={(e) => updateQuizEdit({ ...quizEdit, name: e.target.value })}
            />
            <br />
            <br /> <br />
            <table>
                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-points">Quiz Type &nbsp;</label>
                    </td>
                    <td>
                        <input
                            id="wd-points"
                            className="form-control"
                            defaultValue={quiz.quizType}
                            onChange={(e) => updateQuizEdit({ ...quizEdit, quizType: e.target.value })}
                        />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-points">Points &nbsp;</label>
                    </td>
                    <td>
                        <input
                            id="wd-points"
                            className="form-control"
                            defaultValue={quiz.points}
                            onChange={(e) => updateQuizEdit({ ...quizEdit, points: e.target.value })}
                        />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-quiz-group">Assignment Group &nbsp;</label>
                    </td>
                    <td>
                        <select id="wd-group" className="form-control" defaultValue={quiz.assignmentGroup}>
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-quiz-group">Shuffle Answers &nbsp;</label>
                    </td>
                    <td>
                        <select id="wd-group" className="form-control" defaultValue={quiz.shuffleAnswers}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-points">Time Limit &nbsp;</label>
                    </td>
                    <td>
                        <input
                            id="wd-points"
                            className="form-control"
                            defaultValue={quiz.timeLimit}
                            onChange={(e) => updateQuizEdit({ ...quizEdit, timeLimit: e.target.value })}
                        />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-quiz-group">Multiple Attempts &nbsp;</label>
                    </td>
                    <td>
                        <select id="wd-group" className="form-control" defaultValue={quiz.multipleAttempts}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-quiz-group">Show Correct Answers &nbsp;</label>
                    </td>
                    <td>
                        <select id="wd-group" className="form-control" defaultValue={quiz.showCorrectAnswer}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-quiz-group">One Question at a Time &nbsp;</label>
                    </td>
                    <td>
                        <select id="wd-group" className="form-control" defaultValue={quiz.oneQuestionAtATime}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-quiz-group">Webcam Required &nbsp;</label>
                    </td>
                    <td>
                        <select id="wd-group" className="form-control" defaultValue={quiz.webcamRequired}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="middle">
                        <label htmlFor="wd-quiz-group">Lock Questions After Answering &nbsp;</label>
                    </td>
                    <td>
                        <select id="wd-group" className="form-control" defaultValue={quiz.lockQuestionsAfterAnswering}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>
                <br />
                <br />
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    &nbsp;
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">Available until</label>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <input
                            type="datetime-local"
                            id="wd-due-date"
                            defaultValue={formatQuizDate(quiz.dueDate)}
                            onChange={(e) => updateQuizEdit({ ...quizEdit, dueDate: e.target.value })}
                        />
                    </td>
                    <td align="left" valign="top">
                        <input
                            type="datetime-local"
                            id="wd-available-from"
                            defaultValue={formatQuizDate(quiz.availableDate)}
                            onChange={(e) => updateQuizEdit({ ...quizEdit, availableDate: e.target.value })}
                        />
                    </td>
                    &nbsp;
                    <td align="left" valign="top">
                        <input
                            type="datetime-local"
                            id="wd-available-until"
                            defaultValue={formatQuizDate(quiz.untilDate)}
                            onChange={(e) => updateQuizEdit({ ...quizEdit, untilDate: e.target.value })}
                        />
                    </td>
                </tr>
                <br />

                <tr>
                    <td></td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td align="right">
                        {/*https://reactrouter.com/en/main/hooks/use-navigate*/}
                        <button onClick={() => navigate(-1)} className="btn btn-light rounded-1 border-gray">
                            Cancel
                        </button>
                        &nbsp;
                        <button onClick={() => updateQuiz(quizEdit._id, quizEdit)}>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
