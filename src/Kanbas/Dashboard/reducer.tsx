import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { courses } from "../Database";

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        unenrollFromCourse: (state, { payload: { userId, courseId } }) => {
            const enrollment = state.enrollments.find((e: any) => e.user === userId && e.course === courseId);
            if (!enrollment) return;
            state.enrollments = state.enrollments.filter((e: any) => e._id !== enrollment._id);
        },

        enrollInCourse: (state, { payload: { userId, courseId } }) => {
            const newEnrollment: Enrollment = {
                _id: new Date().getTime().toString(),
                user: userId,
                course: courseId,
            };
            //should explore adding functionality to prevent trying to enroll when already enrolled
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
    },
});

export const { unenrollFromCourse, enrollInCourse } = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
