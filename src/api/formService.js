import axios from 'axios';

// Configure a base instance for your API
const api = axios.create({
  baseURL: 'https://8v7s21p5-5000.inc1.devtunnels.ms', // Replace with your API base URL
  timeout: 10000, // Timeout in milliseconds
});

// User-related API methods
const formService = {
  // Using the api instance for API calls
  getAllTreatments: () => api.get('/fields/GetAllTreatments'), 
  getAllCountries:  () => api.get('/fields/GetAllCounty'), 
  getAllStates:     () => api.get('/fields/GetAllStates'), 
  getAllZipCodes:   () => api.get('/fields/GetAllZipCode'), 
  getAllPayers:     () => api.get('/fields/GetAllPayers'), 
  getAllProviderTypes:   () => api.get('/fields/GetAllPayers'), 
  getAllProviderOrg:     () => api.get('/fields/GetAllPayers'), 
  getAllMacLocality:     () => api.get('/fields/GetAllPayers'), 
  getOrganizerNames:() => api.get('/fields/GetAllOrganizationsName'),
  getNpiRecords:     (query) => api.get(`/fields/GetNpi${query}`), 
  makePayment: (paymentData) => api.post('/stripe/makePayments', paymentData),
};

export default formService;
