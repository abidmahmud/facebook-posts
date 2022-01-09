import React, { Component } from 'react';
import Like from './like.component';
import "./posts.component.css"

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.handleNotClick = this.handleNotClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isLiked: false,
            date: new Date(),
        };
    }

    handleClick() {
        this.setState({ isLiked: false });
    }

    handleNotClick() {
        this.setState({ isLiked: true });
    }
    handleAdd() {
        console.log("New Post Created");
    }

    render() {
        const isLiked = this.state.isLiked;
        let icon;

        if (isLiked) {
            icon =
                <i
                    className='fa fa-thumbs-up'
                    style={{ color: "green", fontSize: "30px" }}
                    onClick={this.handleClick}
                ></i>
        } else {
            icon =
                <i
                    className='fa fa-thumbs-up'
                    style={{ color: "grey", fontSize: "30px" }}
                    onClick={this.handleNotClick}
                ></i>
        }

        return (
            <>
                <button
                    style={{ marginLeft: '1rem' }}
                    className='btn btn-primary'
                    onClick={this.handleAdd}>
                    Add New Post
                </button>

                <div className='card' style={{ marginLeft: '1rem', width: '25rem' }}>
                    <div className='card-body'>
                        <h5 className='card-title'>{this.props.name}</h5>

                        <hr />

                        <h5>It is {this.state.date.toLocaleTimeString()}.</h5>

                        <hr />

                        <img style={{ width: "20rem" }} src="https://cdn.mos.cms.futurecdn.net/Ed7DoSJNMYrTXT9d8yUyQo-1200-80.jpg.webp" alt="Photo" />

                        <hr />

                        <p className='card-text'>{this.props.content}</p>

                        <hr />

                        <Like icon={icon} />

                        <button className='btn btn-warning' onClick={this.props.handleRemove}>Remove</button>

                    </div>
                </div>
            </>
        );
    }
}

export default Posts;

// 3. create child component post.comment.js & render it 5 times (dynamically & reusable)
// 4. like icon different component(reusable component)
// 5. the like icon should be clickable (conditional rendering)
