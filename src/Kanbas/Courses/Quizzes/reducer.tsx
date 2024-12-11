import { createSlice } from "@reduxjs/toolkit";

interface Quiz {
    _id: string;
    name: string;
    course: string;
    quizType: string; //may need to revisit
    points: number; //sum of all questions... formula?
    assignmentGroup: string; //list?
    shuffleAnswers: boolean; //yes/no
    timeLimit: number; //in minutes
    multipleAttempts: boolean; //yes/no
    numAttempts: number; //if multAtt = yes, then can be other than 1
    showCorrectAnswer: boolean; //yes/no
    accessCode: string; //optional password protection
    oneQuestionAtATime: boolean; //yes/no for # of Q to display at a time
    webcamRequired: boolean; //yes/no
    lockQuestionsAfterAnswering: boolean; //yes/no
    dueDate: Date;
    availableDate: Date;
    untilDate: Date;
    status: string;
}

const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        addQuiz: (state, { payload: quiz }) => {
            console.log(quiz);
            const newQuiz: Quiz = {
                _id: new Date().getTime().toString(),
                name: quiz.name,
                course: quiz.course,
                quizType: quiz.quizType,
                points: quiz.points,
                assignmentGroup: quiz.assignmentGroup,
                shuffleAnswers: quiz.shuffleAnswers,
                timeLimit: quiz.timeLimit,
                multipleAttempts: quiz.multipleAttempts,
                numAttempts: quiz.numAttempts,
                showCorrectAnswer: quiz.showCorrectAnswer,
                accessCode: quiz.accessCode,
                oneQuestionAtATime: quiz.oneQuestionAtATime,
                webcamRequired: quiz.webcamRequired,
                lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering,
                dueDate: quiz.dueDate,
                availableDate: quiz.availableDate,
                untilDate: quiz.untilDate,
                status: quiz.status,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },

        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter((q: any) => q._id !== quizId);
        },

        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) => (q._id === quiz._id ? quiz : q)) as any;
        },

        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((q: any) => (q._id === quizId ? { ...q, editing: true } : q)) as any;
        },

        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
    },
});

export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } = quizzesSlice.actions;

export default quizzesSlice.reducer;
