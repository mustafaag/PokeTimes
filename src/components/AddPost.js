import React, {  Component } from 'react';
import { addPost } from '../actions/postActions';
import { connect } from 'react-redux';



class AddPost extends Component {
    state = {
        id: null,
        title: null,
        body: null
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addPost(this.state);
        this.props.history.push('/')
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render () {
        return(
            <div className="container">
            <form onSubmit={this.handleSubmit}>         
                <h3>Add new post</h3>
                <input type="text" onChange={this.handleChange} id="title" placeholder="Post Title" />
                <input type="text" onChange={this.handleChange} id="body" placeholder="Post body" />
                <button onClick={this.handleSubmit} className='btn primary'>
                    Add post
                </button>
            </form>
            </div>  
        )
      
    };
}
const mapStateToProps = (state) =>{
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post)=> {
            dispatch(addPost(post));
        }
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(AddPost);