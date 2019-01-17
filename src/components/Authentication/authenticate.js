import React from 'react';

const authenticate = App => LoginPage => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }
        
        componentWillMount() {
            if(localStorage.getItem(localStorage.key('user'))){
                this.setState(prevState => {
                    return {
                        loggedIn: !prevState.loggedIn
                    }
                })
            } else {
                console.log(false)
            }
        }

        render() {
            if(this.state.loggedIn){
                return (<App />)
            } else {
                return (<LoginPage />)
            }
        }
    }
}
export default authenticate;

