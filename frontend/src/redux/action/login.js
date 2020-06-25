import axios from 'axios';
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const GET_AUTH = 'GET_AUTH'
export const LOGOUT = 'LOGOUT'

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (data, isLoggedIn) => {
  return {
    type: LOGIN_SUCCESS,
    userId: data.userId,
    authIdx: data.auth.authIdx,
    authLevel: data.auth.level,
    isLoggedIn: isLoggedIn
  }
}

export const loginFail = () => {
  return {
    type: LOGIN_FAIL
  }
}

export const getAuth = (data) => {
  return {
    type: GET_AUTH,
    authIdx: data.authIdx,
    authLevel: data.level
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const authenticate = (userId, encodePw, isLoggedIn) => {
  return (dispatch) => {
    dispatch(loginRequest());

    return axios.post('/api/user/loginCheck', {userId, encodePw})
      .then(response => {
        dispatch(loginSuccess(response.data, isLoggedIn));
      })
      .catch(function (error) {
        dispatch(loginFail());
        console.log(error);
      });
  }
}

export const authIdxReload = () => {
  return (dispatch, getState) => {
    const userId = getState().loginManager.status.currentUser;

    return axios.get('/api/user/reloadAuth', {params: {userId: userId}})
      .then(response => {
        dispatch(getAuth(response.data));
      })
      .catch(function (error) {
        dispatch(loginFail());
        console.log(error);
      });
  }
}

export const loginManager = (state = {status: {valid: false}}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        login: {
          status: 'WAITING'
        }
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: {
          status: 'SUCCESS'
        },
        status: {
          ...state.status,
          valid: true,
          currentUser: action.userId,
          authIdx: action.authIdx,
          authLevel: action.authLevel,
          isLoggedIn: action.isLoggedIn
        }
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        login: {
          status: 'FAIL'
        },
      }
    case 'GET_AUTH':
      return {
        ...state,
        status: {
          ...state.status,
          authIdx: action.authIdx,
          authLevel: action.authLevel
        },
      }
    case 'LOGOUT':
      return {
        ...state,
        login: {
          status: 'WAITING'
        },
        status: {
          status: {
            ...state.status,
            isLoggedIn: false
          },
          valid: false,
          currentUser: ''
        }
      }
    default:
      return state
  }
}