import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaGithub, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi2";

export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard",   path: "/Kanbas/Dashboard",  icon: AiOutlineDashboard },
        { label: "Courses",     path: "/Kanbas/Dashboard",  icon: LiaBookSolid },
        { label: "Calendar",    path: "/Kanbas/Calendar",   icon: FaCalendarAlt },
        { label: "Inbox",       path: "/Kanbas/Inbox",      icon: FaInbox },
        { label: "Labs",        path: "/Labs",              icon: HiBeaker },
    ];
    return(
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
                className="list-group rounded-0 position-fixed bottom-0 top-0
                d-none d-md-block bg-black z-2">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
                    className="list-group-item bg-black border-0 text-center">
                        <img src="/images/neu_monogram.svg" width="75px"/>
            </a><br />
            <Link to="/Kanbas/Account" id="wd-account-link" className={`list-group-item bg-black 
                        text-center border-0 ${pathname.includes("Account") ? 
                        "bg-white text-danger" : "bg-black text-white"}`}>
                        <FaRegCircleUser className="fs-1 text text-white" /><br />
                        Account
            </Link>
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item bg-black
                        text-center border-0 ${pathname.includes(link.label) ? 
                        "text-danger bg-white" : "text-white bg-black"}`}>
                       {link.icon({ className: "fs-1 text-danger"})}
                       <br />
                       {link.label}
                </Link>
            ))}              
            <a
                className="list-group-item text-white bg-black text-center border-0"
                href="https://github.com/JonathanOckert/kanbas-react-web-app" 
                id="wd-jo-github" 
                target="_blank"
                >
                    <FaGithub className="fs-1 text-danger"/><br />
                    GitHub
            </a><br />
        </div>
    );
}