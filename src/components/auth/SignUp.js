import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignUp extends Component{
    state={
        firstName: '',
        lastName: '',
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
        const {auth} = this.props;
        if(!auth.uid){
            return(
                <div className="container">
                    <form onSubmit={this.handleOnSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Sign Up</h5>
                        <div className="input-field">
                            <label htmlFor="email">First name</label>
                            <input name="firstName" type="text" 
                                onChange={this.handleOnChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Last name</label>
                            <input name="lastName" type="text" 
                                onChange={this.handleOnChange}/>
                        </div>
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
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            );
        } else {
            return(
                <Redirect to='/'/>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
    }
};

export default connect(
    mapStateToProps,
)(SignUp);