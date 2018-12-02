import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            title : '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title : this.state.title,
            body : this.state.body
        };

        this.props.createPost(post);

        this.setState({
            title : '',
            body: ''
        })
    }

    render() {

        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Post Title</label><br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br/>
                    <div>
                        <label>Post Body</label><br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br/>
                    <button type="submit">Create Post</button>
                    <br/>
                </form>
            </div>
        )
    }
}


PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null,{createPost})(PostForm);
