import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CarForm from '../containers/car-form';

class CarAddPage extends React.Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="page-title">
                        <div className="title_left">
                            <h3>Vehiculos</h3>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Inscribir vehiculo</h2>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content">
                                    <CarForm />
                                </div>
                            </div>
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

export default connect(mapStateToProps)(CarAddPage);