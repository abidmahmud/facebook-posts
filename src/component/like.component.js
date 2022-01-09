import React, { Component } from 'react';

class Like extends React.Component {
    render() {
        return (
            <>
                <span className='inline' style={{ display: "float", }}>
                    <input type="comment" className="form-control" id="comment" placeholder="comment"></input>
                    {this.props.icon}
                    <i className="fa fa-thumbs-down" style={{ color: "grey", fontSize: "30px" }}></i>
                </span>
            </>
        );
    }
}

export default Like;