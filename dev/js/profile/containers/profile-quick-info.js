import React from 'react';
import { connect } from 'react-redux';


class ProfileQuickInfo extends React.Component {

    render() {
        return (
            <div className="profile">
                <div className="profile_pic">
                    <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                </div>
                <div className="profile_info">
                    <span>Bienvenido,</span>
                    <h2>John Doe</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(ProfileQuickInfo);