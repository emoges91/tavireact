import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Tiles extends React.Component {

    render() {
        return (
            <div className="row tile_count">
                <div className="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                    <div className="left"></div>
                    <div className="right">
                        <span className="count_top"><i className="fa fa-user"></i> Total Clientes</span>
                        <div className="count">500</div>
                        <span className="count_bottom"><i className="green">4% </i> de la semana pasada</span>
                    </div>
                </div>
                <div className="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                    <div className="left"></div>
                    <div className="right">
                        <span className="count_top"><i className="fa fa-file-text-o"></i> Total Boletas</span>
                        <div className="count">134</div>
                        <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i>  de la semana pasada</span>
                    </div>
                </div>
                <div className="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                    <div className="left"></div>
                    <div className="right">
                        <span className="count_top"><i className="fa fa-car"></i> Promedio vehiculos activos</span>
                        <div className="count">45</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-desc"></i>12% </i>  de la semana pasada</span>
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

export default connect(mapStateToProps)(Tiles);