
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

    const res = axios.post(`${configs.API_URL}/project/get_project_by_id`, { id })
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

export const approveProject = async (id: string, approve: boolean, symbol: string) => {

    console.log("approveProject", id, approve, symbol);

    const res = axios.post(`${configs.API_URL}/project/approve_project`, { id, approve, symbol })
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};

export const openTrading = async (id: string, openTrading: boolean, lctAmount: number, letAmount: number) => {

    console.log("openTrading", id, openTrading, lctAmount, letAmount);

    const res = axios.post(`${configs.API_URL}/project/open_trading`, { id, openTrading, pool_lct_amount: lctAmount, pool_let_amount: letAmount })
        .then(response => { return response.data })
        .catch(error => { console.log(error) });

    return res;

};