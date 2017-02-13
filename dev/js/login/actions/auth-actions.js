import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from '../../common/actions/types';
import { AXIOS_MAIN } from '../../utils/axios-main';

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

    return AXIOS_MAIN.post(
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