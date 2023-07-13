import React, { Component } from "react";
import { store } from "_helpers";
import { userActions } from "_actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


class PageLeftsideMenu extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <ul className="side-menu">

                <li className="sub-category">
                    <h3>Main</h3>
                </li>
                <li className="slide">
                    <NavLink
                        to={"/main/dashboard"}
                        className="side-menu__item"
                        activeClassName="active">
                        <i className="side-menu__icon fe fe-home"></i><span className="side-menu__label">Dashboard</span>
                    </NavLink>
                </li>
                <li className="sub-category">
                    <h3>Config</h3>
                </li>
                <li>
                <NavLink
                        to={"/main/settings"}
                        className="side-menu__item"
                        activeClassName="active">
                        <i className="side-menu__icon fe fe-home"></i><span className="side-menu__label">Settings</span>
                    </NavLink>
                </li>
                {/* <li className="sub-category">
                <h3>Elements</h3>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-database"></i><span className="side-menu__label">Components</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Components</a></li>
                    <li><a href="cards.html" className="slide-item"> Cards design</a></li>
                    <li><a href="calendar.html" className="slide-item"> Default calendar</a></li>
                    <li><a href="calendar2.html" className="slide-item"> Full calendar</a></li>
                    <li><a href="chat.html" className="slide-item"> Default Chat</a></li>
                    <li><a href="notify.html" className="slide-item"> Notifications</a></li>
                    <li><a href="sweetalert.html" className="slide-item"> Sweet alerts</a></li>
                    <li><a href="rangeslider.html" className="slide-item"> Range slider</a></li>
                    <li><a href="scroll.html" className="slide-item"> Content Scroll bar</a></li>
                    <li><a href="loaders.html" className="slide-item"> Loaders</a></li>
                    <li><a href="counters.html" className="slide-item"> Counters</a></li>
                    <li><a href="rating.html" className="slide-item"> Rating</a></li>
                    <li><a href="timeline.html" className="slide-item"> Timeline</a></li>
                    <li><a href="treeview.html" className="slide-item"> Treeview</a></li>
                </ul>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-package"></i><span className="side-menu__label">Elements</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Elements</a></li>
                    <li><a href="alerts.html" className="slide-item"> Alerts</a></li>
                    <li><a href="buttons.html" className="slide-item"> Buttons</a></li>
                    <li><a href="colors.html" className="slide-item"> Colors</a></li>
                    <li><a href="avatarsquare.html" className="slide-item"> Avatar-Square</a></li>
                    <li><a href="avatar-round.html" className="slide-item"> Avatar-Rounded</a></li>
                    <li><a href="avatar-radius.html" className="slide-item"> Avatar-Radius</a></li>
                    <li><a href="dropdown.html" className="slide-item"> Drop downs</a></li>
                    <li><a href="list.html" className="slide-item"> List</a></li>
                    <li><a href="tags.html" className="slide-item"> Tags</a></li>
                    <li><a href="pagination.html" className="slide-item"> Pagination</a></li>
                    <li><a href="navigation.html" className="slide-item"> Navigation</a></li>
                    <li><a href="typography.html" className="slide-item"> Typography</a></li>
                    <li><a href="breadcrumbs.html" className="slide-item"> Breadcrumbs</a></li>
                    <li><a href="badge.html" className="slide-item"> Badges</a></li>
                    <li><a href="panels.html" className="slide-item"> Panels</a></li>
                    <li><a href="thumbnails.html" className="slide-item"> Thumbnails</a></li>
                </ul>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Advanced Elements</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Advanced Elements</a></li>
                    <li><a href="mediaobject.html" className="slide-item"> Media Object</a></li>
                    <li><a href="accordion.html" className="slide-item"> Accordions</a></li>
                    <li><a href="tabs.html" className="slide-item"> Tabs</a></li>
                    <li><a href="chart.html" className="slide-item"> Charts</a></li>
                    <li><a href="modal.html" className="slide-item"> Modal</a></li>
                    <li><a href="tooltipandpopover.html" className="slide-item"> Tooltip and popover</a></li>
                    <li><a href="progress.html" className="slide-item"> Progress</a></li>
                    <li><a href="carousel.html" className="slide-item"> Carousels</a></li>
                    <li><a href="headers.html" className="slide-item"> Headers</a></li>
                    <li><a href="footers.html" className="slide-item"> Footers</a></li>
                    <li><a href="users-list.html" className="slide-item"> User List</a></li>
                    <li><a href="search.html" className="slide-item">Search</a></li>
                    <li><a href="crypto-currencies.html" className="slide-item"> Crypto-currencies</a></li>
                </ul>
            </li>
            <li className="sub-category">
                <h3>Charts & Tables</h3>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-pie-chart"></i><span className="side-menu__label">Charts</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Charts</a></li>
                    <li><a href="chart-chartist.html" className="slide-item">Chart Js</a></li>
                    <li><a href="chart-flot.html" className="slide-item"> Flot Charts</a></li>
                    <li><a href="chart-echart.html" className="slide-item"> ECharts</a></li>
                    <li><a href="chart-morris.html" className="slide-item"> Morris Charts</a></li>
                    <li><a href="chart-nvd3.html" className="slide-item"> Nvd3 Charts</a></li>
                    <li><a href="charts.html" className="slide-item"> C3 Bar Charts</a></li>
                    <li><a href="chart-line.html" className="slide-item"> C3 Line Charts</a></li>
                    <li><a href="chart-donut.html" className="slide-item"> C3 Donut Charts</a></li>
                    <li><a href="chart-pie.html" className="slide-item"> C3 Pie charts</a></li>
                </ul>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-clipboard"></i><span className="side-menu__label">Tables</span><span className="badge bg-secondary side-badge">2</span><i className="angle fa fa-angle-right hor-rightangle"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Tables</a></li>
                    <li><a href="tables.html" className="slide-item">Default table</a></li>
                    <li><a href="datatable.html" className="slide-item"> Data Tables</a></li>
                </ul>
            </li>
            <li className="sub-category">
                <h3>Pages</h3>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-layers"></i><span className="side-menu__label">Pages</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Pages</a></li>
                    <li><a href="profile.html" className="slide-item"> Profile</a></li>
                    <li><a href="editprofile.html" className="slide-item"> Edit Profile</a></li>
                    <li><a href="email.html" className="slide-item"> Mail-Inbox</a></li>
                    <li><a href="emailservices.html" className="slide-item"> Mail-Compose</a></li>
                    <li><a href="gallery.html" className="slide-item"> Gallery</a></li>
                    <li><a href="about.html" className="slide-item"> About Company</a></li>
                    <li><a href="services.html" className="slide-item"> Services</a></li>
                    <li><a href="faq.html" className="slide-item"> FAQS</a></li>
                    <li><a href="terms.html" className="slide-item"> Terms</a></li>
                    <li><a href="invoice.html" className="slide-item"> Invoice</a></li>
                    <li><a href="pricing.html" className="slide-item"> Pricing Tables</a></li>
                    <li><a href="empty.html" className="slide-item"> Empty Page</a></li>
                    <li><a href="construction.html" className="slide-item"> Under Construction</a></li>
                    <li><a href="switcher.html" className="slide-item"> Theme Style</a></li>
                    <li className="sub-slide">
                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Blog</span><i className="sub-angle fa fa-angle-right"></i></a>
                        <ul className="sub-slide-menu">
                            <li><a href="blog.html" className="sub-slide-item">Blog</a></li>
                            <li><a href="blog-details.html" className="sub-slide-item">Blog Details</a></li>
                            <li><a href="blog-post.html" className="sub-slide-item">Blog Post</a></li>
                        </ul>
                    </li>
                    <li className="sub-slide">
                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Maps</span><i className="sub-angle fa fa-angle-right"></i></a>
                        <ul className="sub-slide-menu">
                            <li><a href="maps1.html" className="sub-slide-item">Leaflet Maps</a></li>
                            <li><a href="maps2.html" className="sub-slide-item">Mapel Maps</a></li>
                            <li><a href="maps.html" className="sub-slide-item">Vector Maps</a></li>
                        </ul>
                    </li>
                    <li className="sub-slide">
                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">E-Commerce</span><i className="sub-angle fa fa-angle-right"></i></a>
                        <ul className="sub-slide-menu">
                            <li><a href="shop.html" className="sub-slide-item">Shop</a></li>
                            <li><a href="shop-description.html" className="sub-slide-item">Shopping Details</a></li>
                            <li><a href="cart.html" className="sub-slide-item">Shopping Cart</a></li>
                            <li><a href="wishlist.html" className="sub-slide-item">Wishlist</a></li>
                            <li><a href="checkout.html" className="sub-slide-item">Checkout</a></li>
                        </ul>
                    </li>
                    <li className="sub-slide">
                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">File Manager</span><i className="sub-angle fa fa-angle-right"></i></a>
                        <ul className="sub-slide-menu">
                            <li><a href="file-manager.html" className="sub-slide-item">File Manager</a></li>
                            <li><a href="filemanager-list.html" className="sub-slide-item">File Manager List</a></li>
                            <li><a href="filemanager-details.html" className="sub-slide-item">File Details</a></li>
                            <li><a href="file-attachments.html" className="sub-slide-item">File Attachments</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="sub-category">
                <h3>Custom & Error Pages</h3>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-settings"></i><span className="side-menu__label">Custom Pages</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Custom Pages</a></li>
                    <li><a href="login.html" className="slide-item"> Login</a></li>
                    <li><a href="register.html" className="slide-item"> Register</a></li>
                    <li><a href="forgot-password.html" className="slide-item"> Forgot Password</a></li>
                    <li><a href="lockscreen.html" className="slide-item"> Lock screen</a></li>
                    <li className="sub-slide">
                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Error Pages</span><i className="sub-angle fa fa-angle-right"></i></a>
                        <ul className="sub-slide-menu">
                            <li><a className="sub-slide-item" href="400.html">400</a></li>
                            <li><a className="sub-slide-item" href="401.html">401</a></li>
                            <li><a className="sub-slide-item" href="403.html">403</a></li>
                            <li><a className="sub-slide-item" href="404.html">404</a></li>
                            <li><a className="sub-slide-item" href="500.html">500</a></li>
                            <li><a className="sub-slide-item" href="503.html">503</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);">
                    <i className="side-menu__icon fe fe-sliders"></i>
                    <span className="side-menu__label">Submenus</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Submenus</a></li>
                    <li><a href="javascript:void(0);" className="slide-item">Level-1</a></li>
                    <li className="sub-slide">
                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Level-2</span><i className="sub-angle fa fa-angle-right"></i></a>
                        <ul className="sub-slide-menu">
                            <li><a className="sub-slide-item" href="javascript:void(0);">Level-2.1</a></li>
                            <li><a className="sub-slide-item" href="javascript:void(0);">Level-2.2</a></li>
                            <li className="sub-slide2">
                                <a className="sub-side-menu__item2" href="javascript:void(0);" data-bs-toggle="sub-slide2"><span className="sub-side-menu__label2">Level-2.3</span><i className="sub-angle2 fa fa-angle-right"></i></a>
                                <ul className="sub-slide-menu2">
                                    <li><a href="javascript:void(0);" className="sub-slide-item2">Level-2.3.1</a></li>
                                    <li><a href="javascript:void(0);" className="sub-slide-item2">Level-2.3.2</a></li>
                                    <li><a href="javascript:void(0);" className="sub-slide-item2">Level-2.3.3</a></li>
                                </ul>
                            </li>
                            <li><a className="sub-slide-item" href="javascript:void(0);">Level-2.4</a></li>
                            <li><a className="sub-slide-item" href="javascript:void(0);">Level-2.5</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="sub-category">
                <h3>Forms & Icons</h3>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-file-text"></i><span className="side-menu__label">Forms</span><span className="badge bg-success side-badge">5</span><i className="angle fa fa-angle-right hor-rightangle"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Forms</a></li>
                    <li><a href="form-elements.html" className="slide-item"> Form Elements</a></li>
                    <li><a href="form-advanced.html" className="slide-item"> Form Advanced</a></li>
                    <li><a href="wysiwyag.html" className="slide-item"> Form Editor</a></li>
                    <li><a href="form-wizard.html" className="slide-item"> Form Wizard</a></li>
                    <li><a href="form-validation.html" className="slide-item"> Form Validation</a></li>
                </ul>
            </li>
            <li className="slide">
                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><i className="side-menu__icon fe fe-command"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
                <ul className="slide-menu">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Icons</a></li>
                    <li><a href="icons.html" className="slide-item"> Font Awesome</a></li>
                    <li><a href="icons2.html" className="slide-item"> Material Design Icons</a></li>
                    <li><a href="icons3.html" className="slide-item"> Simple Line Icons</a></li>
                    <li><a href="icons4.html" className="slide-item"> Feather Icons</a></li>
                    <li><a href="icons5.html" className="slide-item"> Ionic Icons</a></li>
                    <li><a href="icons6.html" className="slide-item"> Flag Icons</a></li>
                    <li><a href="icons7.html" className="slide-item"> pe7 Icons</a></li>
                    <li><a href="icons8.html" className="slide-item"> Themify Icons</a></li>
                    <li><a href="icons9.html" className="slide-item">Typicons Icons</a></li>
                    <li><a href="icons10.html" className="slide-item">Weather Icons</a></li>
                    <li><a href="icons11.html" className="slide-item">Bootstrap Icons</a></li>
                </ul>
            </li>*/}
            </ul>

        );
    }
}
const mapStateToProps = state => ({
    authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
    logout: userActions.logout
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageLeftsideMenu);