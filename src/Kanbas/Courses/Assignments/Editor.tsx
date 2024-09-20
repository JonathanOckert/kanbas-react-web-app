import { Route, Routes } from "react-router-dom";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label> <br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
            The assignment is available online Submit a link to the landing page 
            of your Web application running on Netlify. The landing page should 
            include the following: Your full name and section Links to each of the
            lab assignments Link to the Kanbas application Links to all relevant 
            source code repositories The Kanbas application should include a link 
            to navigate back to the landing page.
            </textarea>
            <br /> <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="RAWNUM">Raw Number</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">
                            Submission Type
                        </label>
                    </td>
                    <td>
                        <select id="wd-submission-type" defaultValue="ONLINE">
                            <option value="ONLINE">Online</option>
                            {/*<option value="EMAIL">Email</option>*/}
                        </select><br />
                    
                        {
                            //Placeholder for potential expansion for multiple submission types
                            //<Routes>
                            //    <Route>
                            //        
                            //    </Route>
                            //</Routes> */
                        } 
                        <br />
                        <label id="wd-online-entry-options">Online Entry Options</label> <br />
                        <input type="checkbox" name="check-text" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-url" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        
                        <input type="checkbox" name="check-media" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        
                        <input type="checkbox" name="check-annotation" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        
                        <input type="checkbox" name="check-file" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">
                            Assign to
                        </label>
                    </td>
                    <td valign="top">
                        <input id="wd-assign-to" value="Everyone"/>
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">
                            Due
                        </label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input type="date"
                            id="wd-due-date"
                            defaultValue="2024-05-13"/>
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">
                            Available from
                        </label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">
                            Available until
                        </label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input type="date"
                            id="wd-available-from"
                            defaultValue="2024-05-06"/>
                    </td>
                    <td align="left" valign="top">
                        <input type="date"
                            id="wd-available-until"
                            defaultValue="2024-05-20"/>
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td></td>
                    <td align="right">
                        <button>Cancel</button> <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}