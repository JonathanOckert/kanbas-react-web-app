import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { enrollments } from "../Database";
import { useDispatch, useSelector } from "react-redux";
//import { addNewCourse, deleteCourseReducer, editCourse } from "../Courses/reducer";
import * as coursesReducer from "../Courses/reducer";
import FacultyButtons from "./FacultyButtons";
import StudentButtons from "./StudentButtons";
import * as coursesClient from "../Courses/client";
import * as enrollmentsClient from "../Courses/Enrollments/client";
import { enrollInCourse, unenrollFromCourse } from "./reducer";
import * as userClient from "../Account/client";

export default function CourseMap({
    courses,
    enrollments,
    showEnrollmentView,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    enrollments: any[];
    showEnrollmentView: Boolean;
    deleteCourse: (courseId: string) => void;
    updateCourse: (course: any) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    //const { enrollments } ;

    const [allCourses, setAllCourses] = useState<any[]>([]);
    const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

    // console.log(courses);
    // console.log("break");
    // console.log(enrolledCourses);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCourses = async () => {
            const allCourses = await coursesClient.fetchAllCourses();
            const enrolledCourses = await userClient.findMyCourses(currentUser._id);
            setAllCourses(allCourses);
            setEnrolledCourses(enrolledCourses);
        };

        fetchCourses();
    }, [showEnrollmentView]);

    // FACULTY BUTTON OPTIONS
    // const deleteCourse = async (courseId: string) => {
    //     await coursesClient.deleteCourse(courseId);
    //     dispatch(deleteCourseReducer(courseId));
    // };

    // const editCourse = async (course: any) => {
    //     const updatedCourse = coursesClient.updateCourseServer(course);
    //     dispatch(updateCourse(course));
    //     return;
    // };

    // STUDENT BUTTON OPTIONS
    const enrollUser = async (userId: string, courseId: string) => {
        const newEnrollment = await enrollmentsClient.createEnrollment(courseId, userId);
        setEnrolledCourses((enrolledCourses) => [
            ...enrolledCourses,
            courses.find((course) => course._id === courseId),
        ]);
        dispatch(enrollInCourse({ userId, courseId }));
        window.location.reload();
    };

    const unenrollUser = async (userId: string, courseId: string) => {
        await enrollmentsClient.deleteEnrollment(courseId, userId);
        setEnrolledCourses((enrolledCourses) => enrolledCourses.filter((course) => course._id !== courseId));
        dispatch(unenrollFromCourse({ userId, courseId }));
        window.location.reload();
    };

    const [course, setCourse] = useState<any>(courses);

    const faculty = currentUser.role == "FACULTY";

    const courseEditingActive = false;

    return (
        <div>
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {showEnrollmentView
                        ? enrolledCourses.map((course: any) => (
                              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                  <div className="card rounded-3 overflow-hidden">
                                      <Link
                                          className="wd-dashboard-course-link 
                                                        text-decoration-none text-dark"
                                          to={`/Kanbas/Courses/${course._id}/Home`}
                                      >
                                          <img src="/images/reactjs.jpg" width="100%" height={160} />
                                          <div className="card-body">
                                              <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                              <p
                                                  className="wd-dashboard-course-title card-text
                                                            overflow-y-hidden"
                                                  style={{ maxHeight: 100 }}
                                              >
                                                  {course.editing ? (
                                                      <input
                                                          className="form-control w-50 d-inline-block"
                                                          onChange={(e) =>
                                                              dispatch(
                                                                  coursesReducer.updateCourse({
                                                                      ...course,
                                                                      name: e.target.value,
                                                                  })
                                                              )
                                                          }
                                                          onKeyDown={(e) => {
                                                              if (e.key === "Enter") {
                                                                  updateCourse({ ...course, editing: false });
                                                              }
                                                          }}
                                                          defaultValue={course.description}
                                                      />
                                                  ) : (
                                                      course.description
                                                  )}
                                              </p>
                                              <button className="btn btn-primary">Go</button>
                                              {faculty && (
                                                  <FacultyButtons
                                                      course={course}
                                                      deleteCourse={deleteCourse}
                                                      //updateCourse={updateCourse}
                                                      //editCourse={(course._id) => dispatch(editCourse(course._id))}
                                                      //editCourse={(course._id) => dispatch(editCourse(course._id))}
                                                      courseEditingActive={courseEditingActive}
                                                  />
                                              )}
                                              {!faculty && (
                                                  <StudentButtons
                                                      course={course}
                                                      user={currentUser}
                                                      enrollments={enrollments}
                                                      showEnrollmentView={showEnrollmentView}
                                                      enrollUser={enrollUser}
                                                      unenrollUser={unenrollUser}
                                                  />
                                              )}
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          ))
                        : allCourses.map((course: any) => (
                              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                  <div className="card rounded-3 overflow-hidden">
                                      <Link
                                          className="wd-dashboard-course-link 
                                                        text-decoration-none text-dark"
                                          to={`/Kanbas/Courses/${course._id}/Home`}
                                      >
                                          <img src="/images/reactjs.jpg" width="100%" height={160} />
                                          <div className="card-body">
                                              <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                              <p
                                                  className="wd-dashboard-course-title card-text
                                                            overflow-y-hidden"
                                                  style={{ maxHeight: 100 }}
                                              >
                                                  {course.description}
                                              </p>
                                              <button className="btn btn-primary">Go</button>
                                              {faculty && (
                                                  <FacultyButtons
                                                      course={course}
                                                      deleteCourse={deleteCourse}
                                                      //updateCourse={updateCourse}
                                                      //editCourse={editCourse}
                                                      courseEditingActive={courseEditingActive}
                                                  />
                                              )}
                                              {!faculty && (
                                                  <StudentButtons
                                                      course={course}
                                                      user={currentUser}
                                                      enrollments={enrollments}
                                                      showEnrollmentView={showEnrollmentView}
                                                      enrollUser={enrollUser}
                                                      unenrollUser={unenrollUser}
                                                  />
                                              )}
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
}
