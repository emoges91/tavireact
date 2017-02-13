import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var displayOptions = { "None": "none", };

class SidebarMenu extends React.Component {
    render() {
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">

                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                        <li><a><i className="fa fa-home"></i> Inicio <span className="fa"></span></a>

                        </li>
                        <li><a><i className="fa fa-handshake-o"></i> Viajes <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu" style={{ display: displayOptions.None }}>
                                <li><Link to="/viajerito/web/signup">Crear</Link></li>
                                <li><Link to="/viajerito/web/login">Ver viajes</Link></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-car"></i> Vehiculos <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu" style={{ display: displayOptions.None }}>
                                <li><Link to="/viajerito/web/car_add">Inscribir</Link></li>
                                <li><Link to="/viajerito/web/cars">Ver vehiculos</Link></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-id-card-o"></i> Choferes <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu" style={{ display: displayOptions.None }}>
                                <li><a href="driver_add.html">Inscribir</a></li>
                                <li><a href="drivers.html">Ver choferes</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-address-card"></i> Clientes <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu" style={{ display: displayOptions.None }}>
                                <li><a href="customer_add.html">Inscribir</a></li>
                                <li><a href="customers.html">Ver clientes</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-university"></i> Centrales <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu" style={{ display: displayOptions.None }}>
                                <li><a href="central_add.html">Inscribir</a></li>
                                <li><a href="centrales.html">Ver centrales</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-cog"></i> Configuracion <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu" style={{ display: displayOptions.None }}>
                                <li><a href="settings.html">Tarifas</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }



}

SidebarMenu.propTypes = {
    currentUserReducer: React.PropTypes.object.isRequired,
}


function mapStateToProps(state) {
    return {
        currentUserReducer: state.currentUserReducer
    };
}

export default connect(mapStateToProps)(SidebarMenu);