import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../login/actions/auth-actions';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(e) {
        e.preventDefault(); 
        this.props.logout();
        this.context.router.push('/viajerito/web/logoff');
    }

    render() {
        const { user } = this.props.currentUserReducer;

        return (
            <div className="top_nav">

                <div className="nav_menu">
                    <nav className="" role="navigation">
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="">
                                <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src="images/img.jpg" alt="" />{user.name}
                                    <span className=" fa fa-angle-down"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu animated fadeInDown pull-right">
                                    <li><a href="javascript:;">  Perfil</a>
                                    </li>
                                    <li><a href="login.html" onClick={this.onLogout}><i className="fa fa-sign-out pull-right"></i> Cerrar session</a>
                                    </li>
                                </ul>
                            </li>

                            <li role="presentation" className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="badge bg-green">6</span>
                                </a>
                                <ul id="menu1" className="dropdown-menu list-unstyled msg_list animated fadeInDown" role="menu">
                                    <li>
                                        <a>
                                            <span className="image">
                                                <img src="images/img.jpg" alt="Profile Image" />
                                            </span>
                                            <span>
                                                <span>Oscar Garita</span>
                                                <span className="time">Hace 3 mins</span>
                                            </span>
                                            <span className="message">
                                                Mala atencion, conductor fuma
                                    </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="text-center">
                                            <a href="inbox.html">
                                                <strong>Ver todas las alertas</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
        );
    }
}

NavigationBar.propTypes = {
    logout: React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
    router: React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
    return {
        currentUserReducer: state.currentUserReducer
    };
}

export default connect(mapStateToProps, { logout })(NavigationBar);