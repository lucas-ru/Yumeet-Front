import client from '../client'
import axios from "axios";

const login = (data) => axios.post("http://localhost:1337/api/auth/local", data);
const getUser = () => client.get("/users/me");

export default {
    login, getUser
};