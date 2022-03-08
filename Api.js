import axios from "axios";
// import state from "../store/index";

// const token = state.state.token;

const Api = () => {
    const http = axios.create({
        baseURL: 'https://localhost:5001/api'
    });
    const token=null;
    
    const all = async (END_POINT,query) => {
        // let token = state.state.token;
        return await http.get(END_POINT, { params: query,headers: { Authorization: `Bearer ${token}`}});
    };
    
    const show = async (END_POINT,id) => {
        // let token = state.state.token;
        return await http.get(`${END_POINT}/${id}`, { headers: { Authorization: `Bearer ${token}`}});
    };
    
    const store = async (END_POINT,data) => {
        // let token = state.state.token;
        return await http.post(END_POINT, data, { headers: { Authorization: `Bearer ${token}`}});
    };

    const edit = async (END_POINT,id,data) => {
        // let token = state.state.token;
        return await http.put(`${END_POINT}/${id}`, data, { headers: { Authorization: `Bearer ${token}`}});
    };

    const del = async (END_POINT,id) => {
        // let token = state.state.token;
        return await http.delete(`${END_POINT}/${id}`, { headers: { Authorization: `Bearer ${token}`}});
    };

    return {all,show,store,edit,del}
}

export default Api