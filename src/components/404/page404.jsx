import React, { Component } from "react";
import Header from "../header/header";

class Page404 extends Component {
    render() {
        return (
            <div>
                <Header pathName={this.props.location} />
                <p>Page Not Found</p>
            </div>
        );
    }
}

export default Page404;
