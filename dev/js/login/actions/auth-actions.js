import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { API_REF_LOGIN, API_REF_BASE } from '../../utils/api-ref';
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
    var querystring = require('querystring');

    //multipart/form-data
    //'application/json;charset=utf-8'

    var instance = axios.create({
      baseURL: API_REF_BASE,
      method: 'POST',
      timeout: 1000,
      data: querystring.stringify({
        apiKey: 'VOFN459045NGFLGFL496WEYLPOP',
        user: data.user,
        pass: data.pass,
        request: 'Authenticate'
      }),
    });

    console.log(JSON.stringify(data));

    return instance.post(
      '/api.php?request=Authenticate&apiKey=VOFN459045NGFLGFL496WEYLPOP',
      querystring.stringify({
        apiKey: 'VOFN459045NGFLGFL496WEYLPOP',
        user: data.user,
        pass: data.pass,
        request: 'Authenticate'
      })
    ).then(res => {
      console.log('response');
      console.log(JSON.stringify(res.data));

      const token = res.data.token;

      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(token));
    });
  }
}