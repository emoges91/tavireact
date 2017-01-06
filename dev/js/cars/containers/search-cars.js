import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var borderLine = { "Noborder": "0", };

class SearchCars extends React.Component {

    render() {
        return (
            <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Buscar por..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Buscar!</button>
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(SearchCars);