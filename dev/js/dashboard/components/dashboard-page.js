import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Tiles from '../containers/tiles';
import CustomerAtention from '../containers/customer-atention';
import CarsAvailable from '../containers/cars-available';

class DashboardPage extends React.Component {
    render() {
        return (
            <div>
                <Tiles />
                <CustomerAtention />
                <br />
                <CarsAvailable />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(DashboardPage);