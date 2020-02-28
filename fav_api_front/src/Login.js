import React, { Component } from 'react';

export default class Login extends Component {
    
    handleSignUp = async () => {
        const user = await request.post(``, {
            email: this.state.signUpEmail,
            password: this.state.signUpPassword,
            display_name: this.state.signUp
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={ this.handleSignUp }>
                    <input onChange={(e) => this.setState(( signUpEmail: e.target.value))} />
                    <input />
                </form>

                <form>

                </form>
            </div>
    
        );
    }
}