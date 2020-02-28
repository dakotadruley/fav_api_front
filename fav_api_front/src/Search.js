import React, { Component } from 'react'
import List from './List.js';
import request from 'superagent';

export default class Search extends Component {
    state = { 
        recipes: [],
        input: '',
    }

    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://still-river-60288.herokuapp.com/api/recipes?search=${this.state.input}`
        )

        this.setState({
            recipes: data.body,
        });
    }

    render() {
        return (
            <div className='searchDiv'>
                <form onSubmit={this.handleSearch}>
                <input className='searchInput' value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button className='searchButton' onClick={this.handleSearch}>Search</button>
                </form>
                <List recipes={this.state.recipes} />
            </div>
        )
    }
}

// if you wrap in a form you can hit enter on search