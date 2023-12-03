import axios from "axios";

const instance = axios.create({
    baseURL: 'https://assignment-11-server-eosin-alpha.vercel.app/api',
    withCredentials: true

});

const useAxios = () => {
    return instance
};

export default useAxios;