import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../header/header";

//Functional Component

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pathName={this.props.location} />
            </React.Fragment>
        );
    }
}

export default MainPage;
