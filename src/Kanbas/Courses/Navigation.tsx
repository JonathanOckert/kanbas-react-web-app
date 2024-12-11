import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Home", path: "Home" },
        { label: "Modules", path: "Modules" },
        { label: "Piazza", path: "Piazza" },
        { label: "Zoom", path: "Zoom" },
        { label: "Assignments", path: "Assignments" },
        { label: "Quizzes", path: "Quizzes" },
        { label: "Grades", path: "Grades" },
        { label: "People", path: "People" },
    ];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    className={`list-group-item
                         border border-0 bg-white ${
                             pathname.includes(link.label) ? "text-black active" : "text-danger"
                         }`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
