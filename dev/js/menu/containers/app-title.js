import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var borderLine = { "Noborder": "0",};

class AppTitle extends React.Component {

    render() {
        return (
            <div className="navbar nav_title" style={{border: borderLine.Noborder}}>
             <Link to="/" className="site_title"><span>Tavi Admin</span></Link>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(AppTitle);