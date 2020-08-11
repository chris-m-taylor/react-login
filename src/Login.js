import React, { Component } from 'react';


const users = {
    username: 'Jeff123',
    password: 'supersecret'
};




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

        if (this.state.username === users.username){
            this.setState({valid: true})
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