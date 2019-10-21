import React, {Component} from 'react';

class SignIn extends Component{
    state={
        email: '',
        password: '',
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" 
                            onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" 
                            onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;