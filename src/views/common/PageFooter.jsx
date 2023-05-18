import React, { Component } from "react";

class PageFooter extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            © 2023 <a href="https://dashboard-tool.com" target="blank">Dashboard-tool Pvt Ltd</a>.
                        </div>
                        <div className="col-md-4 col-sm-12 align-center">
                            <p className="social-icon m-0 d-none">
                                <button  className="link" title="Twitter" ><i className="fa fa-twitter"></i></button>
                            
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-12 text-md-right">
                            <ul className="list-inline mb-0 mr-5">
                                <li className="list-inline-item"><a href="#" className="link">Documentation</a></li>
                                <li className="list-inline-item"><a href="#" className="link">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default PageFooter;