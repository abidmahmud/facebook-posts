import React, { Component } from 'react';

class Like extends React.Component {
    render() {
        return (
            <>
                <span className='inline' style={{ display: "float", }}>
                    <input type="comment" className="form-control" id="comment" placeholder="comment"></input>
                    <i onClick={() => this.props.changeLike()}></i>
                </span>
            </>
        );
    }
}

export default Like;