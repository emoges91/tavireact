import React from 'react';
import NavigationBar from '../navigation/containers/navigation-bar';
import AppTitle from '../menu/containers/app-title';
import ProfileQuickInfo from '../profile/containers/profile-quick-info';
import SidebarMenu from '../menu/containers/sidebar-menu';
import Footer from '../common/containers/footer';
import FlashMessagesList from './flash/FlashMessagesList';
require('../../scss/style.scss');

class App extends React.Component {
  render() {
    return (
      <div className="main_container">
        <div className="col-md-3 left_col">
          <div className="left_col scroll-view">
            <AppTitle />
            <div className="clearfix"></div>
            <ProfileQuickInfo />
            <br />
            <SidebarMenu />
          </div>
        </div>
        <NavigationBar />
        <div className="right_col" role="main">
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;