import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="">
                <a className="hiddenanchor" id="toregister"></a>
                <a className="hiddenanchor" id="tologin"></a>

                <div id="wrapper">
                    <div id="login" className="animate form">
                        <section className="login_content">
                            <form>
                                <h1>Tavi Taxi</h1>
                                <div>
                                    <input type="text" className="form-control" placeholder="Usuario" required="" />
                                </div>
                                <div>
                                    <input type="password" className="form-control" placeholder="Contrase&ntilde;a" required="" />
                                </div>
                                <div>
                                    <a className="btn btn-default submit" href="index.html">Iniciar Session</a>
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
                            { /*<!-- form -->*/}
                        </section>
                        { /*<!-- content -->*/}
                    </div>
                    <div id="register" className="animate form">
                        <section className="login_content">
                            <form>
                                <h1>Create Account</h1>
                                <div>
                                    <input type="text" className="form-control" placeholder="Username" required="" />
                                </div>
                                <div>
                                    <input type="email" className="form-control" placeholder="Email" required="" />
                                </div>
                                <div>
                                    <input type="password" className="form-control" placeholder="Password" required="" />
                                </div>
                                <div>
                                    <a className="btn btn-default submit" href="index.html">Submit</a>
                                </div>
                                <div className="clearfix"></div>
                                <div className="separator">

                                    <p className="change_link">Already a member ?
                                        <a href="#tologin" className="to_register"> Log in </a>
                                    </p>
                                    <div className="clearfix"></div>
                                    <br />
                                    <div>
                                        <h1><i className="fa fa-paw" style="font-size: 26px;"></i> Gentelella Alela!</h1>

                                        <p>©2015 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                    </div>
                                </div>
                            </form>
                            { /*<!-- form -->*/}
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