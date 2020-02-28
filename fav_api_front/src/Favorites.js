import React, { Component } from 'react'
import List from './List.js';

export default class Favorites extends Component {
    state = { 
        recipes: []
    }
    render() {
        return (
            <div>
                <List crecipes={ this.state.recipes }/>
            </div>
        )
    }
}