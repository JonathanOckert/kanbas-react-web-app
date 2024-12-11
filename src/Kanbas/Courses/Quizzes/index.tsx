import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "./reducer";
import AssignmentControlButtons from "../Assignments/AssignmentControlButtons";
import QuizRocketShipIcon from "./QuizRocketShipIcon";
import QuizControls from "./QuizControls";
import QuizDropDownButton from "./QuizDropDownButton";

export default function Quizzes() {
    const { cid } = useParams<{ cid: string }>();

    const dispatch = useDispatch();

    //const [quizzes, setQuizzes] = useState;

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const faculty = currentUser.role == "FACULTY";

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const quizDue = (quiz: any) => {
        const unfriendlyDue = new Date(quiz.dueDate);
        unfriendlyDue.setHours(0, 0, 0, 0);

        const friendlyDue = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(unfriendlyDue);

        return friendlyDue;
    };

    const quizAvailability = (quiz: any) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const unfriendlyDue = new Date(quiz.dueDate);
        unfriendlyDue.setHours(0, 0, 0, 0);

        const unfriendlyAvailable = new Date(quiz.availableDate);
        unfriendlyAvailable.setHours(0, 0, 0, 0);

        const unfriendlyUntil = new Date(quiz.untilDate);
        unfriendlyUntil.setHours(0, 0, 0, 0);

        console.log("time value: ", unfriendlyDue);
        console.log("time value: ", unfriendlyAvailable);
        console.log("time value: ", unfriendlyUntil);

        const friendlyDue = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(unfriendlyDue);

        const friendlyUntil = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(unfriendlyUntil);

        const friendlyAvailable = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(unfriendlyAvailable);

        let availability = "";
        if (today <= unfriendlyDue && today >= unfriendlyAvailable) {
            availability = "Accepting submissions";
        } else if (today >= unfriendlyDue && today <= unfriendlyUntil) {
            availability = `Accepting late submissions until ${friendlyUntil}`;
        } else if (today < unfriendlyAvailable) {
            availability = `Not available until ${friendlyAvailable}`;
        } else {
            availability = "Closed";
        }
        return availability;
    };

    // if (!cid) {
    //     return <div>cid invalid</div>;
    // }

    return (
        <div id="wd-quizzes">
            <QuizControls />
            <hr />
            <br />
            <ul id="wd-quizzes" className="list-group rounded-0">
                {quizzes.map((quiz: any) => (
                    <li key={quiz._id} id={`wd-quiz-${quiz._id}`} className="list-group-item p-0 mb-5 fs-5 border-grey">
                        <div className="row g-4">
                            <div className="col col-2">
                                <QuizRocketShipIcon />
                            </div>
                            <div className="col col-7">
                                <a
                                    className="wd-quiz-link text-black text-decoration-none"
                                    href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                                >
                                    <b>{quiz.name}</b>
                                </a>
                                <br />
                                <span className="text-danger">
                                    <b>{quizAvailability(quiz)}</b>
                                </span>{" "}
                                | <b>Due</b> {quizDue(quiz)} | {quiz.points} pts | xx Questions{" "}
                                {faculty ? null : "| Score xx"}
                            </div>
                            <div className="col col-2">
                                <QuizDropDownButton />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
