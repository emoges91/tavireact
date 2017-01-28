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
    localStorage.removeItem('SessionToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    var querystring = require('querystring');

    var instance = axios.create({
      //  baseURL: API_REF_BASE,
      method: 'POST',
      timeout: 1000,
      data: querystring.stringify({
        apiKey: 'VOFN459045NGFLGFL496WEYLPOP',
        user: data.user,
        pass: data.pass,
        request: 'Authenticate'
      }),
    });

    return instance.post(
      '/api.php?request=Authenticate&apiKey=VOFN459045NGFLGFL496WEYLPOP',
      querystring.stringify({
        apiKey: 'VOFN459045NGFLGFL496WEYLPOP',
        user: data.user,
        pass: data.pass,
        request: 'Authenticate'
      })
    ).then(res => {

      const user = { id: "", name: "" };
      const errorMessage = res.data.Error;
      const token = res.data.token;
      const IsAuth = res.data.IsAuth;

      if (IsAuth == true) {
        localStorage.setItem('SessionToken', token);
        setAuthorizationToken(token);
        console.log('aprovado');

        user.name = res.data.User;
        user.id = res.data.User;

      } else {
        console.log('declinado');
      }

      dispatch(setCurrentUser(user));
    });
  }
}