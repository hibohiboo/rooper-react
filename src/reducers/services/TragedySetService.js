import axios from 'axios';

axios.interceptors.request.use(function (config) {
  config.timeout = 1000;
  config.responseType = 'json';
  return config;
}, function (error) {
  return Promise.reject(error);
});

// axios.get('/tragedySets/basicTragedy.json')
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });


export const getTragedySet = () =>{
  return axios.get('/tragedySets/basicTragedy.json');
}
