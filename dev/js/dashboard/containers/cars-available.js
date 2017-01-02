import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var colorFontOptions = { "White": "#FFF" };
var fontWeightOptions = { "500": "500" };

class CarsAvailable extends React.Component {

    render() {
        return (
            <div className="row">

                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Vehiculos <small>Disponibles</small></h2>
                            <ul className="nav navbar-right panel_toolbox">
                                <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="#">Todos</a>
                                        </li>
                                        <li><a href="#">Disponibles</a>
                                        </li>
                                        <li><a href="#">Ocupados</a>
                                        </li>
                                        <li><a href="#">Inactivos</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>

                        <div className="x_content">
                            <table className="table table-striped responsive-utilities jambo_table bulk_action">
                                <thead>
                                    <tr className="headings">
                                        <th>
                                            <input type="checkbox" id="check-all" className="flat" />
                                        </th>
                                        <th className="column-title">Chofer </th>
                                        <th className="column-title">Vehiculo </th>
                                        <th className="column-title">Ubicacion </th>
                                        <th className="column-title">Estado</th>
                                        <th className="column-title no-link last"><span className="nobr">Action</span>
                                        </th>
                                        <th className="bulk-actions" colspan="7">
                                            <a className="antoo" style={{ color: colorFontOptions.White }}>Bulk Actions ( <span className="action-cnt"> </span> ) <i className="fa fa-chevron-down"></i></a>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="even pointer">
                                        <td className="a-center ">
                                            <input type="checkbox" className="flat" name="table_records" />
                                        </td>
                                        <td className=" ">121000040</td>
                                        <td className=" ">May 23, 2014 11:47:56 PM </td>
                                        <td className=" ">121000210 <i className="success fa fa-long-arrow-up"></i></td>
                                        <td className=" ">Paid</td>
                                        <td className=" last"><a href="#">Asignar</a>
                                        </td>
                                    </tr>
                                    <tr className="odd pointer">
                                        <td className="a-center ">
                                            <input type="checkbox" className="flat" name="table_records" />
                                        </td>
                                        <td className=" ">121000039</td>
                                        <td className=" ">May 23, 2014 11:30:12 PM</td>
                                        <td className=" ">121000208 <i className="success fa fa-long-arrow-up"></i></td>
                                        <td className=" ">Paid</td>
                                        <td className=" last"><a href="#">Asignar</a>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>
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

export default connect(mapStateToProps)(CarsAvailable);