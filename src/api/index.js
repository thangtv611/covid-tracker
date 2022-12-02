import axios from 'axios';

export const getCountries = () => {
    return axios.get('https://api.covid19api.com/countries');
};

export const getReportByCountry = (country = 'south-africa') =>
    axios.get(`https://api.covid19api.com/dayone/country/${country}`);
