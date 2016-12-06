import React, { Component } from 'react';
import logo from './logo.png'
import './Header.css'
import user from './TestData.js'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={user:null};
    }
    setUser = (e) => {
        this.setState({user:user});
    }

    showUser() {
        if(this.state.user) return (
            <div>
                <a className='username'>{this.state.user.name}</a>
                <img className='avatar' src={this.state.user.img_photo} alt='avatar'/>
            </div>
        );
        else return (
            <div>
                <a className='reg-btn'>Зарегистрироваться</a>
                <a className='login-btn' onClick={this.setUser}>Войти</a>
            </div>
        );
    }

    render() {
        return (
            <div className='header'>
                <img src={logo} className='logo' alt='logo'/>
                <nav className='top-nav'>
                    {this.showUser()}
                </nav>
            </div>
        );
    }
}
export default Header;