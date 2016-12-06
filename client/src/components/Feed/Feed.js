import React, { Component } from 'react';
import Post from '../Post/Post.js'
import news from './TestData.js';
import './Feed.css'


class Feed extends Component {
    render() {
        return (
            <div className='feed_row'>
            {news.map(el => <Post data={el} key={el.key} />)}
            </div>
        )
    }
}

export default Feed