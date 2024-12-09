import { useState } from "react";
import { deleteCourse } from "../Courses/reducer";
import { enrollments } from "../Database";
import { useDispatch, useSelector } from "react-redux";
import { unenrollFromCourse, enrollInCourse } from "./reducer";
import * as enrollmentsClient from "../Courses/Enrollments/client";

export default function StudentButtons({
    course,
    user,
    enrollments,
    showEnrollmentView,
    enrollUser,
    unenrollUser,
}: {
    course: any;
    user: any;
    enrollments: any;
    showEnrollmentView: any;
    enrollUser: (userId: string, courseId: string) => void;
    unenrollUser: (userId: string, courseId: string) => void;
}) {
    //const [courses, setCourses] = useState<any[]>(courses);

    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const dispatch = useDispatch();

    // const enrollUser = async (userId: string, courseId: string) => {
    //     enrollmentsClient.createEnrollment(courseId, userId);
    //     dispatch(enrollInCourse({ userId, courseId }));
    // };

    // const unenrollUser = async (enrollmentId: string, courseId: string) => {
    //     enrollmentsClient.deleteEnrollment(courseId, enrollment.user);
    //     dispatch(unenrollFromCourse(enrollment._id));
    //     window.location.reload();
    // };

    // let enrollment = enrollments.filter(function (e: { user: any; course: any }) {
    //     return e.user == user._id && e.course == course._id;
    // }); //enrollments.user === user._id && enrollments.course === course._id);

    const enrollment = enrollments.find(
        (e: { user: any; course: any }) => e.user === user._id && e.course === course._id
    );

    if (enrollment) {
        const enrollmentId = enrollment._id;
    }

    return (
        <>
            {showEnrollmentView && (
                <button
                    className="btn btn-danger float-end"
                    onClick={(event) => {
                        event.preventDefault();
                        let enrollmentId = "0";
                        if (enrollment) {
                            enrollmentId = enrollment._id;
                        }
                        unenrollUser(enrollment.user, course._id);
                    }}
                    id="wd-delete-course-click"
                >
                    Unenroll
                </button>
            )}
            {!showEnrollmentView && (
                <button
                    className="btn btn-success float-end"
                    onClick={(event) => {
                        event.preventDefault();
                        let userId = currentUser._id;
                        let courseId = course._id;
                        enrollUser(userId, courseId);
                        // console.log(enrollmentId);
                    }}
                    id="wd-delete-course-click"
                >
                    Enroll
                </button>
            )}
        </>
    );
}

//similar to enrollmentView state... if click, then trigger unenroll function
// or more likely like the reducer and add to store steps from the delete course refactor
