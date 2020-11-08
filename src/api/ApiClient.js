import axios from 'axios';

const apiClient = axios.create({
    baseURL: `https://testd1.aflabs.org/api/0`,
    timeout: 30000,
});

export default apiClient;