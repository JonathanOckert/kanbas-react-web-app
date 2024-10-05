import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaGithub, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi2";

export default function KanbasNavigation() {
    return(
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
                className="list-group rounded-0 position-fixed bottom-0 top-0
                d-none d-md-block bg-black z-2">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
                    className="list-group-item bg-black border-0 text-center">
                        <img src="/images/neu_monogram.svg" width="75px"/>
            </a><br />
            <Link to="/Kanbas/Account" id="wd-account-link" className="list-group-item
                    text-center border-0 bg-black text-white">
                        <FaRegCircleUser className="fs-1 text text-white" /><br />
                        Account
            </Link><br/>
            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className="list-group-item
                    text-center border-0 bg-white text-danger">
                        <AiOutlineDashboard className="fs-1 text-danger" /><br />
                        Dashboard
            </Link><br/>
            <Link to="/Kanbas/Dashboard" id="wd-course-link" className="list-group-item 
                    text-white bg-black text-center border-0">
                        <LiaBookSolid className="fs-1 text-danger" /><br />
                        Courses
            </Link><br/>
            <Link to="/Kanbas/Calendar" id="wd-calendar-link" className="list-group-item
                    text-center border-0 bg-black text-white">
                        <FaCalendarAlt className="fs-1 text-danger" /><br />
                        Calendar
            </Link><br/>
            <Link to="/Kanbas/Inbox" id="wd-inbox-link" className="list-group-item
                    text-white bg-black text-center border-0">
                        <FaInbox className="fs-1 text-danger" /><br />
                        Inbox
            </Link><br/>
            <Link to="/Labs" id="wd-labs-link" className="list-group-item
                    text-white bg-black text-center border-0">
                        <HiBeaker className="fs-1 text-danger" /><br />
                        Labs
            </Link><br/>               
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