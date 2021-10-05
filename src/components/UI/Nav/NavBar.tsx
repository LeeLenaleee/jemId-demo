import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'logo'}>
                    <Link to='/'>
                        <img src={logo}/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link className={'linkItem'} to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className={'linkItem'} to='/items'>Items</Link>
                        </li>
                    </ul>
                </nav>
            </div>
      )
    }
}