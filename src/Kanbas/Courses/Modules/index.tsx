import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { Module } from "module";

export default function Modules() {
    return (     
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
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
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical />
                            Introduction to the course 
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical />
                            Learn what is Web Development
                            <LessonControlButtons />    
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> 
                            <BsGripVertical />
                            LESSON 1 
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> 
                            <BsGripVertical />
                            LESSON 2 
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> 
                        <BsGripVertical />
                        Week 2 
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical />
                            LEARNING OBJECTIVES 
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> 
                            <BsGripVertical />
                            LESSON 1 
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> 
                            <BsGripVertical />
                            LESSON 2 
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul> 

            {/* Implement Collapse All button, View Progress button, etc. 
            <button id="wd-collapse-all">Collapse All</button> 
            <button id="wd-view-progress">View Progress</button> 
            <select id="wd-select-publish-status">
                <option value="PUBLISHALL">Publish All</option>
                <option value="UNPUBLISHALL">Unpublish All</option>
            </select>
            <button id="wd-add-module">+ Module</button>*/}
            {/*<ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
                        <ModuleControlButtons />
                    </div>


                    
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <li className="wd-title list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
                            <LessonControlButtons />
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title list-group-item p-3 ps-1">READING</span>
                            <LessonControlButtons />
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interface</li>
                            </ul>
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title list-group-item p-3 ps-1">SLIDES</span>
                            <LessonControlButtons />
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title list-group-item p-3 ps-1">LEARNING OBJECTIVES</span>
                            <LessonControlButtons />
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title list-group-item p-3 ps-1">SLIDES</span>
                            <LessonControlButtons />
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings</li>
                                <li className="wd-content-item">Formatting conent with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>*/}
        </div> 
  );
}
  
  