import axios from 'axios';
const API_ROOT = 'https://api.mosafir.ma/index.php/api/v1';

const getTrips = (dep, arv) => {
    return axios.get(`${API_ROOT}/trips?dep=${dep}&arv=${arv}`);
};

const getCities = () => {
    return axios.get(`${API_ROOT}/cities`);
};

const getArvCities = (dep) => {
    return axios.get(`${API_ROOT}/arv_cites?dep=${dep}`);
};

const getDestinations = () => {
    return axios.get(`${API_ROOT}/destinations?limit=9`);
};

const contactForm = (data) => {
    return axios.post(`${API_ROOT}/contact`, data);
};

export { getTrips, getCities, getArvCities, getDestinations, contactForm };
