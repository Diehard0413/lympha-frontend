
import axios from 'axios';

import configs from '../configs';

export const getAllProjects = async () => {

    console.log("getAllProjects");

    const res = axios.get(`${configs.API_URL}/project/get_projects`, {})
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};

export const listNewProject = async (title: string, email: string) => {

    console.log("listNewProject", title, email);

    const res = axios.post(`${configs.API_URL}/project/list_new_project`, { title, email })
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};

export const approveProject = async (id: string, approve: boolean) => {

    console.log("approveProject", id, approve);

    const res = axios.post(`${configs.API_URL}/project/update_project`, { id, approved: approve })
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};