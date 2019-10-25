import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {signUp} from '../../store/actions/authActions';

class SignUp extends Component{
    state={
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state);
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        const {auth, authError} = this.props;
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
                            < div className="red lighten-4 red-text center">
                                {
                                    authError ?
                                    (
                                        <h5 style={{
                                                padding: '6px',
                                                border: '1px solid red',
                                                borderRadius: '5px',
                                            }}>
                                            {authError.message}
                                        </h5>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
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
        authError: state.auth.authError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {
            dispatch(signUp(newUser));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);