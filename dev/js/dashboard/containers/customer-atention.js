import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var withOptions = { "P100": "100%", "P76": "76%" };
var heightOptions = { "F270": "270px", "F260": "260px" };
var displayOptions = { "None": "none", };

class CustomerAtention extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="dashboard_graph">

                        <div className="row x_title">
                            <div className="col-md-6">
                                <h3>Mapa <small>Area de atencion al cliente</small></h3>
                            </div>
                        </div>

                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <div id="placeholder33" style={{ height: heightOptions.F260, display: displayOptions.None }} className="demo-placeholder"></div>
                            <div style={{ width: withOptions.P100 }}>
                                <div id="world-map-gdp" className=" " style={{ width: withOptions.P100, height: heightOptions.F270 }}></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 bg-white">
                            <div className="x_title">
                                <h2>Estado de Atencion al Cliente</h2>
                                <div className="clearfix"></div>
                            </div>

                            <div className="col-md-12 col-sm-12 col-xs-6">
                                <div>
                                    <p>Tiempo de Espera en Atender</p>
                                    <div className="">
                                        <div className="progress progress_sm" style={{ width: withOptions.P76 }}>
                                            <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="80"></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>Reportan Molestias</p>
                                    <div className="">
                                        <div className="progress progress_sm" style={{ width: withOptions.P76 }}>
                                            <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-6">
                                <div>
                                    <p>Viajes Cancelados</p>
                                    <div className="">
                                        <div className="progress progress_sm" style={{ width: withOptions.P76 }}>
                                            <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="40"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="clearfix"></div>
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

export default connect(mapStateToProps)(CustomerAtention);