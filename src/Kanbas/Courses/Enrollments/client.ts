import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/courses`;

export const deleteEnrollment = async (courseId: string, userId: string) => {
    try {
        const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}/${userId}/unenroll`);
        return response.data;
    } catch (error) {
        console.error("Error upon enrollment deletion: ", error);
        throw error;
    }
};

export const createEnrollment = async (courseId: string, userId: string) => {
    try {
        const { data } = await axios.post(`${ENROLLMENTS_API}/${courseId}/${userId}/enrollments`);
        return data;
    } catch (error) {
        console.error("Error upon enrollment creation: ", error);
        throw error;
    }
};
