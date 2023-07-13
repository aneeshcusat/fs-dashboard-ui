import React, { Component } from "react";
import PageLeftsideMenu from "./PageLeftsideMenu";

class PageSidebar extends Component {
    render() {
        return (
            <> {/*<!--APP-SIDEBAR-->*/}
                <div className="sticky">
                    <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                    <aside className="app-sidebar">
                        <div className="side-header">
                            <a className="header-brand1" href="index.html">
                                <img src="/assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                                <img src="/assets/images/brand/logo-1.png" className="header-brand-img toggle-logo" alt="logo" />
                                <img src="/assets/images/brand/logo-2.png" className="header-brand-img light-logo" alt="logo" />
                                <img src="/assets/images/brand/logo-3.png" className="header-brand-img light-logo1" alt="logo" />
                            </a>
                            {/*<!-- LOGO -->*/}
                        </div>
                        <div className="main-sidemenu">
                            <div className="slide-left disabled" id="slide-left"></div>
                            <PageLeftsideMenu/>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                            </svg></div>
                        </div>
                    </aside>
                </div>
                {/*<!--/APP-SIDEBAR-->*/}</>
        );
    }
}

export default PageSidebar;