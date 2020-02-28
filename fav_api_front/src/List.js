import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.recipes.map(recipe => <div className="recipeDiv">
                        {recipe.title}
                    </div>)
                }
            </div>
        )
    }
}