import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SearchCars from '../containers/search-cars';

class CarsPage extends React.Component {
    render() {
        return (
            <div>
                <div className="page-title">
                    <div className="title_left">
                        <h3>
                            Vehiculos
                        </h3>
                    </div>
                    <div className="title_right">
                        <SearchCars />
                    </div>
                </div>
                <div className="clearfix"></div>

                <div className="row">

                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="x_panel">
                            <div className="x_title">
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">
                                <table id="example" className="table table-striped responsive-utilities jambo_table">
                                    <thead>
                                        <tr className="headings">
                                            <th>
                                                <input type="checkbox" className="tableflat" />
                                            </th>
                                            <th>ID </th>
                                            <th>Placa</th>
                                            <th>Modelo </th>
                                            <th>Año</th>
                                            <th>Tipo </th>
                                            <th>Dueño </th>
                                            <th>Extras </th>
                                            <th className=" no-link last"><span className="nobr">Action</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="even pointer">
                                            <td className="a-center ">
                                                <input type="checkbox" className="tableflat" />
                                            </td>
                                            <td className=" ">121000040</td>
                                            <td className=" ">FGV-123 </td>
                                            <td className=" ">Hyundai</td>
                                            <td className=" ">Tucson</td>
                                            <td className=" ">2017 </td>
                                            <td className="  ">Juan Robles</td>
                                            <td className="a-right a-right ">
                                                <i className="success fa fa-long-arrow-up"></i>
                                            </td>
                                            <td className=" last"><a href="#">Ver</a>
                                            </td>
                                        </tr>
                                        <tr className="odd pointer">
                                            <td className="a-center ">
                                                <input type="checkbox" className="tableflat" />
                                            </td>
                                            <td className=" ">121000039</td>
                                            <td className=" ">GFH-849</td>
                                            <td className=" ">Toyota</td>
                                            <td className=" ">Corolla</td>
                                            <td className=" ">2011 </td>
                                            <td className=" ">Mario Mena</td>
                                            <td className="a-right a-right "><i className="success fa fa-long-arrow-up"></i></td>
                                            <td className=" last"><a href="#">Ver</a>
                                            </td>
                                        </tr>

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />

                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(CarsPage);