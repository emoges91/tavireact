import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { API_REF_LOGIN } from '../../utils/api-ref';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../../common/actions/types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
   
      alert(data);
    return axios.post(
      API_REF_LOGIN,
      data
    ).then(res => {
      alert('hi:' + res.data);

      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}