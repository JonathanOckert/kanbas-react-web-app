import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

interface Assignment {
    _id: string;
    title: string;
    course: string; // todo: change to Course
    modules: string; // change to modules
    availability: string;
    due_date: string;
    points: number;
}

// interface AssignmentsState {
//     assignments: Assignment[];
// }

// const initialState: AssignmentsState = {
//     assignments: assignments,
// };

const initialState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            console.log(assignment);
            const newAssignment: Assignment = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                modules: assignment.modules,
                availability: assignment.availability,
                due_date: assignment.due_date,
                points: assignment.points,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },
        updateAssignmentLocally: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) => (a._id === assignment._id ? assignment : a)) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        //getAssignment
    },
});

export const { addAssignment, deleteAssignment, updateAssignmentLocally, editAssignment, setAssignments } =
    assignmentsSlice.actions;

export default assignmentsSlice.reducer;
