import React, { Component } from 'react';
import { Link } from 'react-router';

import Sky from './Sky';
import Celestial from './Celectial';
import Title from './Title';


const LightTheme = {
    skyColor: 'cornflowerblue',
    objectColor: 'yellow',
    objectBorderColor: '#abab00'
}

const DarkTheme = {
    skyColor: 'darkblue',
    objectColor: 'gray',
    objectBorderColor: 'darkgray'
}

class StarComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Now click on the Sun',
            isDay: true,
            theme: LightTheme,
        }
    }

    handleClick() {
        const isDay = !this.state.isDay;

        this.setState({
            isDay: isDay,
            title: isDay ? 'Now click on the Sun' : 'Now click on the Moon',
            theme: isDay ? LightTheme : DarkTheme
        });

    }

    render() {
        return (
            <div>
                <h1>Go <Link to='/'>Home</Link ></h1>
                    <Sky theme={this.state.theme}>
                        <Title>{this.state.title}</Title>
                        <Celestial theme={this.state.theme} onClick={() => this.handleClick()}></Celestial>
                    </Sky>
            </div>
        );
    }
}

export default StarComponent;