import axios from 'axios';
export const MODULE_REQUEST = 'MODULE_REQUEST';
export const DISPENSING_MODULE_REQUEST = 'DISPENSING_MODULE_REQUEST';
export const MODULE_SUCCESS = 'MODULE_SUCCESS';
export const DISPENSING_MODULE_SUCCESS = 'DISPENSING_MODULE_SUCCESS';
export const MODULE_FAIL = 'MODULE_FAIL';

export const moduleRequest = () => {
  return {
    type: MODULE_REQUEST
  }
}

export const dispensingModuleRequest = () => {
  return {
    type: DISPENSING_MODULE_REQUEST
  }
}

export const moduleSuccess = (data) => {
  return {
    type: MODULE_SUCCESS,
    module: data
  }
}

export const dispensingModuleSuccess = (data) => {
  return {
    type: DISPENSING_MODULE_SUCCESS,
    dispensingModule: data
  }
}

export const moduleFail = () => {
  return {
    type: MODULE_FAIL
  }
}

export const dispensingModuleManager = (moduleType, authIdx) => {
  return (dispatch) => {
    dispatch(dispensingModuleRequest());
    return axios.get('/api/module/get/dispensing/install', { params: { authIdx: authIdx }})
      .then(response => {
        dispatch(dispensingModuleSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(moduleFail());
        console.log(error);
      });
  }
}

export const moduleManager = (moduleType, authIdx) => {
  return (dispatch) => {
    dispatch(moduleRequest());
    return axios.get('/api/module/getDataByAuth', { params: { authIdx: authIdx }})
      .then(response => {
        dispatch(moduleSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(moduleFail());
        console.log(error);
      });
  }
}


export const modules = (state = {status: 'WAITING'}, action) => {
  switch (action.type) {
    case 'MODULE_REQUEST':
      return {
        ...state,
        module: [],
        status: 'WAITING'
      }
    case 'DISPENSING_MODULE_REQUEST':
      return {
        ...state,
        dispensingModule: [],
        status: 'WAITING'
      }
    case 'MODULE_SUCCESS':
      return {
        ...state,
        module: [...action.module],
        status: 'SUCCESS',
      }
    case 'DISPENSING_MODULE_SUCCESS':
      return {
        ...state,
        dispensingModule: [...action.dispensingModule],
        status: 'SUCCESS',
      }
    case 'MODULE_FAIL':
      return {
        status: 'FAIL'
      }
    default:
      return state
  }
}