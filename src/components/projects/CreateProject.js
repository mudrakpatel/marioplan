import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createProject} from '../../store/actions/projectActions';

class CreateProject extends Component{
    state={
        title: '',
        content: '',
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.createProject(this.state);
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
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input name="title" type="text" 
                            onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea"
                            name="content" onChange={this.handleOnChange}>
                        </textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => {
            dispatch(createProject(project));
        },
    }
}

export default connect(
    null,
    /** Because there is not mapStateToProps in this component **/
    mapDispatchToProps,
)(CreateProject);