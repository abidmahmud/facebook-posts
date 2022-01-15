import React, { Component } from 'react';

class Navbar extends React.Component {
    state = {
        like: this.props.like,
        dislike: this.props.disLike,
    }
    render() {
        return (
            <>
                <nav className="d-flex justify-content-between navbar navbar-light bg-light" >
                    <div className=" d-flex navbar-brand mb-0 h1" >
                        <i
                            style={{ marginLeft: '1.5rem', color: "blue", fontSize: "50px" }}
                            className="fa fa-facebook-square">
                        </i>
                        <div> Like : {this.props.like}</div>
                        <div> Dislike : {this.props.disLike}</div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;