import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.recipes.map(recipe => <div className="recipeDiv">
                       <p className='recipeTitle'> {recipe.title} </p>
                       <p> {recipe.href} </p>
                       <p> {recipe.thumbnail} </p>
                    </div>)
                }
            </div>
        )
    }
}