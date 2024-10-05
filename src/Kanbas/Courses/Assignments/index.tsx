import { BsGripVertical } from "react-icons/bs";
import { FaM, FaMagnifyingGlass } from "react-icons/fa6";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div id="wd-search-assignment">
                <button className="btn btn-light wd-search-width">
                    <FaMagnifyingGlass />&nbsp;&nbsp;&nbsp;<span>Search...</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>
                {/*<FaMagnifyingGlass />
                <input id="wd-search-assignment" className="btn btn-light" 
    placeholder="Search..." />*/}
                
            
            <button id="wd-add-assignment" className="btn btn-danger float-end">
                + Assignment
            </button>
            <button id="wd-add-assignment-group" className="btn btn-light float-end">
                + Group
            </button>



            {/*<ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> 
                        <BsGripVertical />
                        Week 1 
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical />    
                            LEARNING OBJECTIVES 
                            <LessonControlButtons />
    </li> */}


            </div><br />
            <li id="wd-assignments-list" className="wd-module list-group-item p-0
                    mb-5 fs-5 border gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical />
                            ASSIGNMENTS
                            40% of Total
                            <ModuleControlButtons />
                        </div>
                        <ul className="wd-assignments list-group rounded-0">
                            <li className="wd-assignment list-group-item p-3 ps-1">
                                <div id="wd-assignment-info" className="row">
                                    <div className="row g-4">
                                        <div className="col col-2">
                                            <AssignmentControlButtons />
                                        </div>
                                        <div className="col col-8">
                                            <a className="wd-assignment-link text-black text-decoration-none" 
                                                href="#/Kanbas/Courses/1234/Assignments/123">
                                                <b>A1</b>
                                            </a> <br />
                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 
                                            12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                                        </div>
                                        <div className="col col-2">
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col col-2">
                                            <AssignmentControlButtons />
                                        </div>
                                        <div className="col col-8">
                                            <a className="wd-assignment-link text-black text-decoration-none" 
                                                href="#/Kanbas/Courses/1234/Assignments/223">
                                                <b>A2</b>
                                            </a> <br />
                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 
                                            12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                                        </div>
                                        <div className="col col-2">
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col col-2">
                                            <AssignmentControlButtons />
                                        </div>
                                        <div className="col col-8">
                                            <a className="wd-assignment-link text-black text-decoration-none" 
                                                href="#/Kanbas/Courses/1234/Assignments/323">
                                                <b>A3</b>
                                            </a> <br />
                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 
                                            12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                                        </div>
                                        <div className="col col-2">
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                </div>                  
                            </li>
                        </ul>
            </li>
        </div>
    );
}

