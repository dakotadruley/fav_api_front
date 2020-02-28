import React, { Component } from 'react'
import List from './List.js';
import request from 'superagent';

export default class Search extends Component {
    state = { 
        recipes: [],
        input: '',
    }

    handleSearch = async () => {
        const data = await request.get(`http://www.recipepuppy.com/api/?i=${this.state.input}&p=1`)

        const dataObject = JSON.parse(data.text);

        this.setState({
            recipes: dataObject.results,
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={this.handleSearch}>Search</button>
                <List recipes={this.state.recipes} />
            </div>
        )
    }
}