import React from 'react';
import validateInput from './validations/login-val';
import { connect } from 'react-redux';
import { login } from '../actions/auth-actions';
import TextField from '../../common/containers/forms/text-field-login';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
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
            <form onSubmit={this.onSubmit}>
                <h1>Tavi Taxi</h1>
                {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                <TextField
                    field="identifier"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                    placeholder="Usuario / Email"
                    />
                <TextField
                    field="password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Contrase&ntilde;a"
                    />
                <div>
                    <button className="btn btn-default submit" disabled={isLoading}>Iniciar Session</button>
                    <a className="reset_pass" href="#">Perdio su Contrase&ntilde;a?</a>
                </div>
                <div className="clearfix"></div>
                <div className="separator">
                    <br />
                    <div>
                        <p>©2016 All Rights Reserved. Tavi Taxi S.A Privacy and Terms</p>
                    </div>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);