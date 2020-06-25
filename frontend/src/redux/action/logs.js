import axios from 'axios'
import Qs from 'qs';
export const GET_LOG_REQUEST = 'GET_LOG_REQUEST'
export const GET_LOG_DELETE = 'GET_LOG_DELETE'
export const GET_CARE_LOG_SUCCESS = 'GET_CARE_LOG_SUCCESS'
export const GET_LOG_FAILURE = 'GET_LOG_FAILURE'

export const getLogRequest = () => {
  return {
    type: GET_LOG_REQUEST
  }
}

export const getLogDelete = () => {
  return {
    type: GET_LOG_DELETE
  }
}

export const getCareLogSuccess = (data) => {
  return {
    type: GET_CARE_LOG_SUCCESS,
    care: data
  }
}

export const getLogFailure = (error) => {
  return {
    type: GET_LOG_FAILURE,
    error
  }
}

export const getCareLog = (modules) => {
  const params = {
    modules: modules.map(d => {return d.moduleIdx})
  }
  
  let myAxios = axios.create({
    paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'})
  })

  return (dispatch) => {
    dispatch(getLogRequest());
    
    return myAxios.get('/api/care/status', {params})
      .then(response => {
        dispatch(getCareLogSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getLogFailure(error));
      });
  }
}

export const dataLog = (state = {status: 'WAITING'}, action) => {
  switch (action.type) {
    case 'GET_LOG_REQUEST':
      return {...state, status: 'WAITING'}
    case 'GET_LOG_DELETE':
      return {}
    case 'GET_CARE_LOG_SUCCESS':
      return {...state, care: action.care, status: 'SUCCESS'}
    case 'GET_LOG_FAILURE':
      console.log(state);
      return state
    default:
      return state
  }
}