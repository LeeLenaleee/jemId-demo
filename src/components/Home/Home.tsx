import React, {Component} from "react"
import flower from './../../assets/images/flower.jpg';
import './Home.css';

export default class Home extends Component {

    render() {
        return(
            <div className={'mainCentered'}>
                <h1>Kweker Hondserlesdijk</h1>
                <img src={flower} />
                <p>
                    Welkom op de website van Kweker Hondserlesdijk, hier zijn alle producten te zien die wij verkopen
                </p>
            </div>
        )
    }
}

