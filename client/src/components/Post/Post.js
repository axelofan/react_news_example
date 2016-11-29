import React, { Component } from 'react';
import './Post.css'

class Post extends Component {

    render() {
        return (
            <div className='feed_col'>
                <div className='post'>
                    <img src={this.props.data.enclosure} alt={this.props.data.title}/>
                    <div className='title'>
                        {this.props.data.title}
                    </div>
                    <div className='description'>
                        {this.props.data.description}
                    </div>
                </div>
            </div>
        )
    }
}
export default Post