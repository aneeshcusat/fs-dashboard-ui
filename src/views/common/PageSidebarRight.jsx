import React, { Component } from "react";

class PageSidebarRight extends Component {
    render() {
        return (
            <>
                {/*<!-- Sidebar-right -->*/}
            <div className="sidebar sidebar-right sidebar-animate">
                <div className="panel panel-primary card mb-0 shadow-none border-0">
                    <div className="tab-menu-heading border-0 d-flex p-3">
                        <div className="card-title mb-0">Notifications</div>
                        <div className="card-options ms-auto">
                            <a href="javascript:void(0);" className="sidebar-icon text-end float-end me-1" data-bs-toggle="sidebar-right" data-target=".sidebar-right"><i className="fe fe-x text-white"></i></a>
                        </div>
                    </div>
                    <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
                        <div className="tabs-menu border-bottom">
                            {/*<!-- Tabs -->*/}
                            <ul className="nav panel-tabs">
                                <li className=""><a href="#side1" className="active" data-bs-toggle="tab"><i className="fe fe-user me-1"></i> Profile</a></li>
                                <li><a href="#side2" data-bs-toggle="tab"><i className="fe fe-users me-1"></i> Contacts</a></li>
                                <li><a href="#side3" data-bs-toggle="tab"><i className="fe fe-settings me-1"></i> Settings</a></li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="side1">
                                <div className="card-body text-center">
                                    <div className="dropdown user-pro-body">
                                        <div className="">
                                            <img alt="user-img" className="avatar avatar-xl brround mx-auto text-center" src="/assets/images/faces/6.jpg"/><span className="avatar-status profile-status bg-green"></span>
                                        </div>
                                        <div className="user-info mg-t-20">
                                            <h6 className="fw-semibold  mt-2 mb-0">Mintrona Pechon</h6>
                                            <span className="mb-0 text-muted fs-12">Premium Member</span>
                                        </div>
                                    </div>
                                </div>
                                <a className="dropdown-item d-flex border-bottom border-top" href="profile.html">
                                    <div className="d-flex"><i className="fe fe-user me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">My Profile</h6>
                                            <p className="tx-12 mb-0 text-muted">Profile Personal information</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex border-bottom" href="chat.html">
                                    <div className="d-flex"><i className="fe fe-message-square me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">My Messages</h6>
                                            <p className="tx-12 mb-0 text-muted">Person message information</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex border-bottom" href="emailservices.html">
                                    <div className="d-flex"><i className="fe fe-mail me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">My Mails</h6>
                                            <p className="tx-12 mb-0 text-muted">Persons mail information</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex border-bottom" href="editprofile.html">
                                    <div className="d-flex"><i className="fe fe-settings me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">Account Settings</h6>
                                            <p className="tx-12 mb-0 text-muted">Settings Information</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex border-bottom" href="login.html">
                                    <div className="d-flex"><i className="fe fe-power me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">Sign Out</h6>
                                            <p className="tx-12 mb-0 text-muted">Account Signout</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="tab-pane" id="side2">
                                <div className="list-group list-group-flush ">
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/9.jpg"><span className="avatar-status bg-success"></span></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Mozelle Belt</div>
                                            <p className="mb-0 tx-12 text-muted">mozellebelt@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/11.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Florinda Carasco</div>
                                            <p className="mb-0 tx-12 text-muted">florindacarasco@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/10.jpg"><span className="avatar-status bg-success"></span></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Alina Bernier</div>
                                            <p className="mb-0 tx-12 text-muted">alinaaernier@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/2.jpg"><span className="avatar-status bg-success"></span></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Zula Mclaughin</div>
                                            <p className="mb-0 tx-12 text-muted">zulamclaughin@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/13.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Isidro Heide</div>
                                            <p className="mb-0 tx-12 text-muted">isidroheide@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/12.jpg"><span className="avatar-status bg-success"></span></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Mozelle Belt</div>
                                            <p className="mb-0 tx-12 text-muted">mozellebelt@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/4.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Florinda Carasco</div>
                                            <p className="mb-0 tx-12 text-muted">florindacarasco@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/7.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Alina Bernier</div>
                                            <p className="mb-0 tx-12 text-muted">alinabernier@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/2.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Zula Mclaughin</div>
                                            <p className="mb-0 tx-12 text-muted">zulamclaughin@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/14.jpg"><span className="avatar-status bg-success"></span></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Isidro Heide</div>
                                            <p className="mb-0 tx-12 text-muted">isidroheide@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/11.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Florinda Carasco</div>
                                            <p className="mb-0 tx-12 text-muted">florindacarasco@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/9.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Alina Bernier</div>
                                            <p className="mb-0 tx-12 text-muted">alinabernier@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/15.jpg"><span className="avatar-status bg-success"></span></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Zula Mclaughin</div>
                                            <p className="mb-0 tx-12 text-muted">zulamclaughin@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md brround cover-image" data-bs-image-src="/assets/images/faces/4.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold" data-bs-toggle="modal" data-target="#chatmodel">Isidro Heide</div>
                                            <p className="mb-0 tx-12 text-muted">isidroheide@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="side3">
                                <a className="dropdown-item bg-gray-100 pd-y-10" href="javascript:void(0);">
                                        Account Settings
                                    </a>
                                <div className="card-body">
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" checked/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Updates Automatically</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Allow Location Map</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" checked/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Show Contacts</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" checked/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Show Notication</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Show Tasks Statistics</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" checked/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Show Email Notification</span>
                                            </label>
                                    </div>
                                </div>
                                <a className="dropdown-item bg-gray-100 pd-y-10" href="javascript:void(0);">
                                        General Settings
                                    </a>
                                <div className="card-body">
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" checked/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Show User Online</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Website Notication</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Show Recent activity</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Logout Automatically</span>
                                            </label>
                                    </div>
                                    <div className="form-group mg-b-10">
                                        <label className="custom-switch ps-0">
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" checked/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description mg-l-10">Allow All Notifications</span>
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--/Sidebar-right-->*/}
            </>
        );
    }
}

export default PageSidebarRight;