import axios from 'axios'
import Qs from 'qs';
export const GET_LOG_REQUEST = 'GET_LOG_REQUEST'
export const GET_LOG_DELETE = 'GET_LOG_DELETE'
export const GET_GAS_LOG_SUCCESS = 'GET_GAS_LOG_SUCCESS'
export const GET_HF_LOG_SUCCESS = 'GET_HF_LOG_SUCCESS'
export const GET_LEAKAGE_LOG_SUCCESS = 'GET_LEAKAGE_LOG_SUCCESS'
export const GET_PH_LOG_SUCCESS = 'GET_PH_LOG_SUCCESS'
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

export const getGasLogSuccess = (data) => {
  return {
    type: GET_GAS_LOG_SUCCESS,
    gas: data
  }
}

export const getHfLogSuccess = (data) => {
  return {
    type: GET_HF_LOG_SUCCESS,
    hf: data
  }
}

export const getLeakageLogSuccess = (data) => {
  return {
    type: GET_LEAKAGE_LOG_SUCCESS,
    leakage: data
  }
}

export const getPhLogSuccess = (data) => {
  return {
    type: GET_PH_LOG_SUCCESS,
    ph: data
  }
}

export const getLogFailure = (error) => {
  return {
    type: GET_LOG_FAILURE,
    error
  }
}

export const getGasLog = (modules) => {
  const params = {
    modules: modules.map(d => {return d.moduleIdx})
  }
  
  let myAxios = axios.create({
    paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'})
  })

  return (dispatch) => {
    dispatch(getLogRequest());
    
    return myAxios.get('/api/gas/status', {params})
      .then(response => {
        dispatch(getGasLogSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getLogFailure(error));
      });
  }
}

export const getHfLog = (modules) => {
  const params = {
    modules: modules.map(d => {return d.moduleIdx})
  }
  
  let myAxios = axios.create({
    paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'})
  })

  return (dispatch) => {
    dispatch(getLogRequest());
    return myAxios.get('/api/hf/status', {params})
      .then(response => {
        dispatch(getHfLogSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getLogFailure(error));
      });
  }
}

export const getLeakageLog = (modules) => {
  const params = {
    modules: modules.map(d => {return d.moduleIdx})
  }
  
  let myAxios = axios.create({
    paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'})
  })

  return (dispatch) => {
    dispatch(getLogRequest());
    return myAxios.get('/api/leakage/status', {params})
      .then(response => {
        dispatch(getLeakageLogSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getLogFailure(error));
      });
  }
}

export const getPhLog = (modules) => {
  const params = {
    modules: modules.map(d => {return d.moduleIdx})
  }
  
  let myAxios = axios.create({
    paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'})
  })

  return (dispatch) => {
    dispatch(getLogRequest());
    return myAxios.get('/api/ph/status', {params})
      .then(response => {
        dispatch(getPhLogSuccess(response.data));
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
    case 'GET_GAS_LOG_SUCCESS':
      return {...state, gas: action.gas, status: 'SUCCESS'}
    case 'GET_HF_LOG_SUCCESS':
      return {...state, hf: action.hf, status: 'SUCCESS'}
    case 'GET_LEAKAGE_LOG_SUCCESS':
      return {...state, leakage: action.leakage, status: 'SUCCESS'}
    case 'GET_PH_LOG_SUCCESS':
      return {...state, ph: action.ph, status: 'SUCCESS'}
    case 'GET_LOG_FAILURE':
      console.log(state);
      return state
    default:
      return state
  }
}