import React from 'react';
import TextField from '../../common/containers/forms/text-field';
import ComboField from '../../common/containers/forms/combo-field';
import SingleCheckboxField from '../../common/containers/forms/single-checkbox-field';
import validateInput from '../validations/new-car';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class CarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            placa: '',
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
            this.props.login(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, identifier, password, isLoading } = this.state;

        return (
            <form className="form-horizontal form-label-left" novalidate>
                <p>
                    Por favor rellene el formulario con los datos legitimos del vehiculo a inscribir
                </p>
                <br />

                <TextField
                    field="placa"
                    label="Placa"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                    />
                <ComboField
                    field="marca"
                    label="Marca"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                    />

                <ComboField
                    field="modelo"
                    label="Modelo"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                    />

                <ComboField
                    field="ano"
                    label="Año"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                    />

                <ComboField
                    field="tipo"
                    label="Tipo"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                    />

                <ComboField
                    field="dueno"
                    label="Dueño"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                    />

                <SingleCheckboxField
                    field="handicap"
                    label="Discapacitados"
                    error={errors.identifier}
                    onChange={this.onChange}
                    />

                <SingleCheckboxField
                    field="pets"
                    label="Mascotas"
                    error={errors.identifier}
                    onChange={this.onChange}
                    />

                <SingleCheckboxField
                    field="smoke"
                    label="Permite fumar"
                    error={errors.identifier}
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
    login: React.PropTypes.func.isRequired
}

CarForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(CarForm);