import React, { Component } from 'react';
import Like from './like.component';
import "./posts.component.css"

class Posts extends React.Component {
    state = {
        id: this.props.id,
        posts: this.props.posts,
        like: this.props.like,
        dislike: this.props.dislike,
        date: new Date()
    }

    changeLike = () => {
        const like = this.state.like;
        like === true ?
            this.setState({ className: 'fa fa-thumbs-up', color: "grey" }) :
            this.setState({ className: 'fa fa-thumbs-up', color: "green" });
        like != like;
        this.setState({ like })
    }

    render() {
        const { id, name, content, handleRemove } = this.props;
        return (
            <>
                <div className='card' style={{ marginLeft: '1rem', width: '25rem' }}>
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>

                        <hr />

                        <h5>It is {this.state.date.toLocaleTimeString()}.</h5>

                        <hr />

                        <img style={{ width: "20rem" }} src="https://cdn.mos.cms.futurecdn.net/Ed7DoSJNMYrTXT9d8yUyQo-1200-80.jpg.webp" alt="Photo" />

                        <hr />

                        <p className='card-text'>{content}</p>

                        <hr />

                        <Like changeLike={this.changeLike()} />

                        <button onClick={() => handleRemove(id)} className='btn btn-warning' >Remove</button>

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
