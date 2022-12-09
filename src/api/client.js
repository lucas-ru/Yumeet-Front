import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:1337/api'
  // baseURL: 'http://172.24.232.179:1337/api'
});

export default client