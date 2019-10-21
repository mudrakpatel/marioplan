import React, {Component} from 'react';

class CreateProject extends Component{
    state={
        title: '',
        content: '',
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

export default CreateProject;