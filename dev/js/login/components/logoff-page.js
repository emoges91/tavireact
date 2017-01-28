import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LogoffPage extends React.Component {
    render() {
        return (
            <div className="">
                <div id="wrapper">
                    <div id="login" className="animate form">
                        <section className="login_content">
                            <h1>Tavi Taxi</h1>
                            <div>
                                <Link className="btn btn-default submit" to="/viajerito/web/login">Ir a iniciar Session</Link>
                            </div>
                            <div className="clearfix"></div>
                            <div className="separator">
                                <br />
                                <div>
                                    <p>©2016 All Rights Reserved. Tavi Taxi S.A Privacy and Terms</p>
                                </div>
                            </div>
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

export default connect(mapStateToProps)(LogoffPage);