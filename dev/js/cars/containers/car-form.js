import React from 'react';
import TextField from '../../common/containers/forms/text-field';
import ComboField from '../../common/containers/forms/combo-field';
import SingleCheckboxField from '../../common/containers/forms/single-checkbox-field';
import validateInput from '../validations/new-car';
import { CAR_BRANDS } from '../utils/cars-brands';
import { CAR_YEARS } from '../utils/cars-years';
import { connect } from 'react-redux';
import { newCar } from '../actions/car-actions';

class CarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            placa: '',
            marca: '',
            model: '',
            year: '',
            type: '',
            owner: '',
            handicap: '',
            pets: '',
            smoke: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.newCar(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {identifier, placa, marca, model, year, type, owner, handicap, pets, smoke, errors, isLoading } = this.state;
        console.log("years : " + JSON.stringify(CAR_YEARS));
        return (
            <form className="form-horizontal form-label-left" onSubmit={this.onSubmit}>
                <p>
                    Por favor rellene el formulario con los datos legitimos del vehiculo a inscribir
                </p>
                <br /> 

                <TextField
                    field="placa"
                    label="Placa"
                    value={placa}
                    error={errors.placa}
                    onChange={this.onChange}
                />

                <ComboField
                    field="marca"
                    label="Marca"
                    value={marca}
                    options={CAR_BRANDS}
                    error={errors.marca}
                    onChange={this.onChange}
                />

                <TextField
                    field="model"
                    label="Modelo"
                    value={model}
                    error={errors.model}
                    onChange={this.onChange}
                />



                <ComboField
                    field="year"
                    label="Año"
                    value={year}
                    options={CAR_YEARS}
                    error={errors.year}
                    onChange={this.onChange}
                />

                <ComboField
                    field="type"
                    label="Tipo"
                    value={type}
                    options={[]}
                    error={errors.type}
                    onChange={this.onChange}
                />

                <ComboField
                    field="owner"
                    label="Dueño"
                    value={owner}
                    options={[]}
                    error={errors.owner}
                    onChange={this.onChange}
                />

                <SingleCheckboxField
                    field="handicap"
                    label="Discapacitados"
                    error={errors.handicap}
                    onChange={this.onChange}
                />

                <SingleCheckboxField
                    field="pets"
                    label="Mascotas"
                    error={errors.pets}
                    onChange={this.onChange}
                />

                <SingleCheckboxField
                    field="smoke"
                    label="Permite fumar"
                    error={errors.smoke}
                    onChange={this.onChange}
                />

                <div className="ln_solid"></div>
                <div className="form-group">
                    <div className="col-md-6 col-md-offset-3">
                        <button id="send" type="submit" className="btn btn-success" disabled={isLoading}>Guardar</button>
                    </div>
                </div>
            </form>
        );
    }
}

CarForm.propTypes = {
    newCar: React.PropTypes.func.isRequired
}

CarForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { newCar })(CarForm);