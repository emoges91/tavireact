import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.placa)) {
        errors.placa = 'This field is required';
    }

    if (Validator.isEmpty(data.marca) || data.marca == '') {
        errors.marca = 'This field is required';
    }

    if (Validator.isEmpty(data.model)) {
        errors.model = 'This field is required';
    }

    if (Validator.isEmpty(data.year)) {
        errors.year = 'This field is required';
    }

    if (Validator.isEmpty(data.type)) {
        errors.type = 'This field is required';
    }

    if (Validator.isEmpty(data.owner)) {
        errors.owner = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}