import React from 'react';
import { connect } from 'react-redux';


class ProfileQuickInfo extends React.Component {

    render() {
        const { user } = this.props.currentUserReducer;

        return (
            <div className="profile">
                <div className="profile_pic">
                    <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                </div>
                <div className="profile_info">
                    <span>Bienvenido,</span>
                    <h2>{user.name}</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUserReducer: state.currentUserReducer
    };
}

export default connect(mapStateToProps)(ProfileQuickInfo);