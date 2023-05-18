import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
	
import routes from "routes.js";
import AuthRight from "views/user/components/AuthRight";

class ErrorLayout extends Component {
 
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/error") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props} routeProp={prop} 
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className="auth">
        <Switch>{this.getRoutes(routes)}</Switch>
        <AuthRight/>
		  </div>
    );
  }
}

export default ErrorLayout;
