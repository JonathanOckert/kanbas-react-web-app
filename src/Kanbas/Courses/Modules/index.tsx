import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { Module } from "module";
import { useParams } from "react-router";
import * as db from "../../Database";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
    const { cid } = useParams();
    //const modules = db.modules;
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };

    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };

    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div className="wd-modules">
            <ModulesControls
                moduleName={moduleName}
                setModuleName={setModuleName}
                addModule={createModuleForCourse}
                // } {() => {
                // dispatch(addModule({ name: moduleName, course: cid }));
                // setModuleName("");}
            />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    // .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li key={module._id}>
                            {module.editing ? (
                                <input
                                    className="form-control w-50 d-inline-block"
                                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({ ...module, editing: false });
                                            // dispatch(updateModule({ ...module, editing: false }));
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            ) : (
                                module.name
                            )}

                            <ModuleControlButtons
                                moduleId={module._id}
                                deleteModule={(moduleId) => {
                                    removeModule(moduleId);
                                    // dispatch(deleteModule(moduleId));
                                }}
                                editModule={(moduleId) => dispatch(editModule(moduleId))}
                            />

                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3 " />
                                            {lesson.name}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
