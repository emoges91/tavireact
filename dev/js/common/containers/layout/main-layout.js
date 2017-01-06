import React from 'react';
import NavigationBar from '../../../navigation/containers/navigation-bar';
import AppTitle from '../../../menu/containers/app-title';
import ProfileQuickInfo from '../../../profile/containers/profile-quick-info';
import SidebarMenu from '../../../menu/containers/sidebar-menu';
import Footer from '../footer';
require('../../../../scss/style.scss');

const id = "bodyElement";

const MainLayout = (props) => (
    <div id={id} className="nav-md">
        <div className="container body">
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
                    {props.children}
                    <Footer />
                </div>
            </div>
        </div>
    </div>
)

export default MainLayout