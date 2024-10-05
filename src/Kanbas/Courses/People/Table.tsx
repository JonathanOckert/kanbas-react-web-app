import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
            <thead>
                <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2024-10-01</td>
                    <td className="wd-total-activity">10:21:32</td> 
                </tr>
                {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Steve</span>{" "}
                        <span className="wd-last-name">Rogers</span></td>
                    <td className="wd-login-id">001234562S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2024-09-30</td>
                    <td className="wd-total-activity">12:31:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Bucky</span>{" "}
                        <span className="wd-last-name">Barns</span></td>
                    <td className="wd-login-id">001234563S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2024-10-02</td>
                    <td className="wd-total-activity">10:25:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Thor</span>{" "}
                        <span className="wd-last-name">Odinson</span></td>
                    <td className="wd-login-id">001234564S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2024-10-04</td>
                    <td className="wd-total-activity">07:43:54</td> 
                </tr>
            </tbody>
            </table>
        </div>
    )
}