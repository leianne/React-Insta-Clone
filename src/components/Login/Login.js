import React from 'react';

import { LoginContainer, LoginForm } from './LoginStyles';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {    
        localStorage.setItem('user', this.state.usernameInput)
    }

    render() {
        return(
        <LoginContainer>
            <img src='https://cdn.worldvectorlogo.com/logos/instagram-1.svg' alt='instaLogo' />
            <LoginForm  onSubmit={this.login}>
                <input type='text' name='usernameInput' onChange={this.handleChange} value={this.state.usernameInput} />
                <input type='text' name='passwordInput' onChange={this.handleChange} value={this.state.passwordInput} />
                <button>Login</button>
            </LoginForm>
        </LoginContainer>    
        )
    }
}

export default Login