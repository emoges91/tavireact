import React from 'react';
import TextField from '../../common/containers/forms/text-field';
import ComboField from '../../common/containers/forms/combo-field';
import SingleCheckboxField from '../../common/containers/forms/single-checkbox-field';
import validateInput from '../validations/new-car';
import { CAR_BRANDS } from '../utils/cars-brands';
import { CAR_TYPES } from '../utils/cars-types';
import getYears from '../utils/cars-years';
import getOwners from '../utils/cars-owners';
import { connect } from 'react-redux';
import { newCar } from '../actions/car-actions';
import { AXIOS_MAIN } from '../../utils/axios-main';

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
            isLoading: false,
            drivers: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        //  this.componentDidMount = this.componentDidMount.bind(this);
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

    componentDidMount() {
        AXIOS_MAIN
            .get("api.php?request=Drivers&apiKey=VOFN459045NGFLGFL496WEYLPOP&token=djy1c27f4k9x6bsh0tx981ta")
            .then(function (result) {

                const driversList = result.data.map(function (item, i) {
                    return (
                        { id: item.Id, name: item.Name + " " + item.LastName }
                    );
                });

                console.log("owners willmount : " + JSON.stringify(driversList));
                this.setState({ drivers: driversList });
            });


        this.state.drivers = [{ id: 0, name: "hi" }];
        console.log("owners Hi : " + JSON.stringify(this.state.drivers));
    }

    render() {
        const {identifier, placa, marca, model, year, type, owner, handicap, pets, smoke, errors, isLoading, drivers } = this.state;
        const yearsList = getYears();
        const ownersList = getOwners();
        console.log("owners resp : " + JSON.stringify(ownersList));
        console.log("drivers : " + JSON.stringify(drivers));

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
                    options={yearsList}
                    error={errors.year}
                    onChange={this.onChange}
                />

                <ComboField
                    field="type"
                    label="Tipo"
                    value={type}
                    options={CAR_TYPES}
                    error={errors.type}
                    onChange={this.onChange}
                />

                <ComboField
                    field="owner"
                    label="Dueño"
                    value={owner}
                    options={drivers}
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