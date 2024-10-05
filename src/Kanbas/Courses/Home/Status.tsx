import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";
import { MdAnnouncement } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
        <h2>Course Status</h2>
        <div className="d-flex">
            <div className="w-50 pe-1">
                <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                    <MdDoNotDisturbAlt className="me-2 fs-5" />
                    Unpublish
                </button> 
            </div>
            <div className="w-50">
                <button className="btn btn-lg btn-success w-100">
                    <FaCheckCircle className="me-2 fs-5" />
                    Publish
                </button>
            </div><br />
        </div>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <BiImport className="me-2 fs-5" />
            Import Existing Content
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <LiaFileImportSolid className="me-2 fs-5" />
            Import from Commons
        </button>
        <button>
            <FaHome className="me-2 fs-5" />
            Choose Home Page
        </button>
        <button>
            <LuFileStack className="me-2 fs-5" />
            View Course Stream
        </button>
        <button>
            <MdAnnouncement className="me-2 fs-5" />
            New Announcement
        </button>
        <button>
            <IoMdAnalytics className="me-2 fs-5" />
            New Analytics
        </button>
        <button>
            <IoIosNotifications className="me-2 fs-5" />
            View Course Notifications
        </button>
      </div>
  );}
  