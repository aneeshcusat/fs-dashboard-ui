import React, { Component } from "react";

class PageFooter extends Component {
    render() {
        return (
            <> {/*<!-- FOOTER -->*/}
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-md-12 col-sm-12 text-center">
                            Copyright © <span id="year"></span> <a href="javascript:void(0);">Dashboard-UI</a>. Designed with <span className="fa fa-heart text-danger"></span> by <a href="javascript:void(0);"> Spruko </a> All rights reserved
                        </div>
                    </div>
                </div>
            </footer>
            {/*<!-- FOOTER END -->*/}</>
        );
    }
}

export default PageFooter;