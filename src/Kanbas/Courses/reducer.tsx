import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";

interface Course {
    _id: string;
    name: string;
    number: number;
    startDate: Date;
    endDate: Date;
    image: "/images/reactjs.jpg";
    description: string;
}

const initialState = {
    courses: courses,
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }) => {
            //const newCourse = { ...course, _id: new Date().getTime().toString() };
            //setCourses([...courses, { ...course, ...newCourse }]);
            const newCourse: Course = {
                _id: new Date().getTime().toString(),
                name: course.name,
                number: course.number,
                startDate: course.startDate,
                endDate: course.endDate,
                image: "/images/reactjs.jpg",
                description: course.description,
            };
            state.courses = [...state.courses, newCourse] as any;
        },

        deleteCourseReducer: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((c: any) => c._id !== courseId);
        },

        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) => (c._id === course._id ? course : c)) as any;
        },

        editCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.map((c: any) => (c._id === courseId ? { ...c, editing: true } : c)) as any;
        },
    },
});

export const { addNewCourse, deleteCourseReducer, updateCourse, editCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
