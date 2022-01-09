import React, { Component } from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="d-flex justify-content-between navbar navbar-light bg-light" >
                    <div className=" d-flex navbar-brand mb-0 h1" >
                        <i
                            style={{ marginLeft: '1.5rem', color: "blue", fontSize: "50px" }}
                            className="fa fa-facebook-square">
                        </i>
                        <h4> Like : {this.props.show}</h4>
                        <h4> Dislike : {this.props.count1}</h4>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;