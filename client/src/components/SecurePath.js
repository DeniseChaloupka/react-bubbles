import React from "react";
import { Route, Redirect } from "react-router";

const SecurePath = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem("token")) {
                    return <Component {...rest}/>;
                } else {
                return <Redirect to="/" />;
                }
            }}
        />
    );
};

export default SecurePath;