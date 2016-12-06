import React, { Component } from 'react';
import moment from 'moment';
import like from './icon-like.png'
import comment from './icon-comment.png'
import './Post.css'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {likeCount: props.data.like_count, isLike: props.data.is_like};
    }

    setLike = (e) => {
        const likeCount = (this.state.isLike) ? this.state.likeCount-1 : this.state.likeCount+1;
        this.setState({likeCount: likeCount, isLike: !this.state.isLike});
    }
    getTime() {
        return moment(this.props.data.date_public).locale("ru").calendar();
    }

    render() {
        return (
            <div className='feed_col'>
                <div className='post'>
                    <img src={this.props.data.img_url} alt={this.props.data.title}/>
                    {this.props.data.keywords.map(el => <a className='tag' key={el}>{'#'+el}</a>)}
                    <div className='title'>
                        {this.props.data.title}
                    </div>
                    <div className='description'>
                        {this.props.data.description}
                    </div>
                    <div className='post_footer'>
                        <a className='username' href='#!'>{'@'+this.props.data.user.name}</a>
                        <span className='pub_date'>{this.getTime()}</span>
                        <div className='counters_icons'>
                        <a className='counters_like'>
                            <img src={like} onClick={this.setLike} alt='Like' className={(this.state.isLike)?'active':''}/>
                            <span>{this.state.likeCount}</span>
                        </a>
                        <a className='comments_amount'>
                            <img src={comment} alt='Comment'/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post