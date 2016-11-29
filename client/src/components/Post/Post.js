import React, { Component } from 'react';
import like from './icon-like.png'
import comment from './icon-comment.png'
import './Post.css'

class Post extends Component {
    constructor(props) {
        super(props);
        this.likeCount = props.data.likeCount;
        this.isLiked = props.data.isLiked;
    }

    setLike = (e) => {
        const likeCount = (this.isLiked) ? this.likeCount-- : this.likeCount++;
        this.setState({likeCount: likeCount});
        this.isLiked = !this.isLiked;
    }

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
                    <div className='post_footer'>
                        <a className='counters_like'>
                            <img src={like} onClick={this.setLike} alt='Like' className={(this.isLiked)?'active':''}/>
                            <span>{this.likeCount}</span>
                        </a>
                        <a className='comments_amount'>
                            <img src={comment} alt='Comment'/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post