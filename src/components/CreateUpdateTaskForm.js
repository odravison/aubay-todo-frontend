import React, { Component } from 'react';
import './CreateUpdateTaskForm.css';

class CreateUpdateTaskForm extends Component {
    constructor(props) {
        super(props);

        this.index = props.index;

        this.initialState = {
            index: this.index,
            name: '',
            description: '',
            when: '',
            status: '',
            createdAt: ''
        }

        this.handleInputChange = event => {
            const { name, value } = event.target;

            this.setState({
                [name]: value,
            })
        }

        this.submitForm = () => {
            this.props.submitForm(this.state)
            this.setState(this.initialState)
          }

        this.state = this.initialState;

    }

    render() {
        const { name, description, when, status } = this.state;

        return (
            <div className="container">
                <form>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange} />

                    <label>Description</label>
                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleInputChange} />

                    <label>When</label>
                    <input
                        type="text"
                        name="when"
                        value={when}
                        onChange={this.handleInputChange} />

                    <label>Status</label>
                    <input
                        type="text"
                        name="status"
                        value={status}
                        onChange={this.handleInputChange} />
                </form>

                <button className="submmit-button" type="button" onClick={this.submitForm} > submmit </button>
            </div>
            
        );
    }
}

export default CreateUpdateTaskForm;