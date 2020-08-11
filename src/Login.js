import React, { Component } from 'react';
import {users} from './users';


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            valid: false
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.onSubmit();
    }

    onSubmit = () => {
        for (const user of users){
            if (this.state.username.toLowerCase() === user.username.toLowerCase() && this.state.password === user.password){
                
                this.setState({valid: true});
                break;
            }
        }
    };

    inputChange = (event) => {
        this.setState({[event.target.placeholder]: event.target.value});
    }

    render() {
        if (this.state.valid){
            return this.props.children;
        }
        else{
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <input 
                            type="text" 
                            placeholder="username" 
                            onChange={this.inputChange}>
                            </input>
                        </p>
                        <p>
                            <input 
                            type="text" 
                            placeholder="password" 
                            onChange={this.inputChange}>
                            </input>
                        </p>
                        <p><button type="submit" onClick={this.handleSubmit}>Submit</button></p>
                    </form>
                </div>
            );
        }
    }
}
export default Login;