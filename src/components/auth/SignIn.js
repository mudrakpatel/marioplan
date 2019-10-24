import React, {Component} from 'react';
import {connect} from 'react-redux';

import {signIn} from '../../store/actions/authActions';

class SignIn extends Component{
    state={
        email: '',
        password: '',
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        const {authError} = this.props;

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
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credentials) => {
            dispatch(signIn(credentials));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);