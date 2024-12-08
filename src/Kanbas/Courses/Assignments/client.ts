import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// export const deleteAssignment = async (assignmentId: string) => {
//     console.log("sending to backend: ", assignmentId);
//     //console.log("id sent: ", assignmentId);
//     const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//     return response.data;
// };
export const deleteAssignment = async (assignmentToDelete: any) => {
    console.log("sending to backend: ", assignmentToDelete);
    //console.log("id sent: ", assignmentId);
    const assignmentId = assignmentToDelete._id;
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`, assignmentToDelete);
    return response.data;
};

export const updateAssignment = async (assignmentId: string, updatedAssignment: any) => {
    console.log("sending to backend: ", updatedAssignment);
    console.log("id sent: ", assignmentId);
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, updatedAssignment);
    return data;
};
