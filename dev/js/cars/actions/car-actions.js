import { AXIOS_MAIN } from '../../utils/axios-main';

export function newCar(data) {
    return dispatch => {
        var querystring = require('querystring');

        return AXIOS_MAIN.post(
            '/api.php?request=Cars&apiKey=VOFN459045NGFLGFL496WEYLPOP',
            querystring.stringify({
                apiKey: 'VOFN459045NGFLGFL496WEYLPOP',
                token: '',
                placa: data.placa,
                owner: data.owner,
                year: data.year,
                marca: data.marca,
                model: data.model,
                ishandicapped: data.handicap,
                allowpets: data.pets,
                type: data.type,
                allowsmoke: data.smoke,
                request: 'Cars'
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