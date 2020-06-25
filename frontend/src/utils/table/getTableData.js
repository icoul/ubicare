import axios from 'axios';

export function getTableData(url, params, makeDataLevel) {
  return axios.get(url, params)
    .then(response => {
      return response.data.map((d, index) => {
        return {
          ...makeDataLevel(d, index)
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function getPagingTableData(url, params) {
  return axios.get(url, params)
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}