import React, { Component } from "react";

class BrandNameLogo extends Component {
    render() {
        return (

            <div className="text-center mb-1">
                <div className="header-brand">
                    <img alt="dashboard-tool" src="/favicon.ico" style={{ width: 30 + 'px' }}></img>
                    <span className="brand-name pl-2">Dashboard</span>
                </div>
            </div>
        );
    }
}

export default BrandNameLogo;
