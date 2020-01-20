import React, { Component } from "react";
import Header from "../header/header";

class UsersPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pathName={this.props.location} />
                <ul>
                    {["Alex", "John", "Jaz", "fedrik", "missali"].map(
                        (user, idx) => {
                            return <li key={idx}>{user}</li>;
                        }
                    )}
                </ul>
            </React.Fragment>
        );
    }
}

export default UsersPage;
