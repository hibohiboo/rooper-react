import * as axios from 'axios';
import { tragedySetList, TragedySetType } from '../models/TragedySet';

axios.interceptors.request.use(function (config) {
  config.timeout = 1000;
  config.responseType = 'json';
  return config;
}, function (error) {
  return Promise.reject(error);
});

/**
 * 指定したidの惨劇セットを取得
 * 
 * @param TragedySetType id 惨劇セットID
 * 
 * @return Promise 惨劇セットのjsonを返す
 */
export const getTragedySet = (id:TragedySetType) =>{
  const set = tragedySetList.find(set=> set.id === id);
  return axios.get('/tragedySets/' + set.fileName);
}

// axios.get('/tragedySets/basicTragedy.json')
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
