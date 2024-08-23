
import axios from 'axios';

import configs from '../configs';

export const getAllProjects = async () => {

    console.log("getAllProjects");

    const res = axios.get(`${configs.API_URL}/project/get_projects`, {})
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};

export const getProjectById = async (id: string) => {

    console.log("getProjectById");

    const res = axios.post(`${configs.API_URL}/project/get_project_by_id`, {id})
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

    const res = axios.post(`${configs.API_URL}/project/approve_project`, { id, approved: approve })
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};

export const openTrading = async (id: string, open_trading: boolean) => {

    console.log("openTrading", id, open_trading);

    const res = axios.post(`${configs.API_URL}/project/open_trading`, { id, open_trading })
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};