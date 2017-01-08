import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginForm from '../containers/login-form';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="">
                <div id="wrapper">
                    <div id="login" className="animate form">
                        <section className="login_content">
                            <LoginForm />
                        </section>
                        { /*<!-- content -->*/}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(LoginPage);