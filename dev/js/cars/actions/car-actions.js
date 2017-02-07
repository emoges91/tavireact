import axios from 'axios';
import { API_REF_LOGIN, API_REF_BASE } from '../../utils/api-ref';

export function newCar(data) {
    return dispatch => {
        var querystring = require('querystring');

        var instance = axios.create({
            //  baseURL: API_REF_BASE,
            method: 'POST',
            timeout: 1000,
            data: querystring.stringify({
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
            }),
        });

        return instance.post(
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