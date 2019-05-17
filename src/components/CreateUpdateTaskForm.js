import React, { Component } from 'react';
import './CreateUpdateTaskModalForm.css';

import DatePicker from "react-datepicker";

import { statusList } from '../virtual-persistent-data/data';

import "react-datepicker/dist/react-datepicker.css";

import { Alert, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const StatusOptionsSimpleComponent = props => {
    const { handleSelectItem, valueItem} = props;
    const statusOptions = props.statusList.map((element, index) => {
        return <option key={index} value={element} >{element}</option>;
    });

    return (
        <Input type="select" defaultValue={valueItem} onChange={handleSelectItem} name="status" id="selectStatus">
            <option value={undefined} >Select initial status</option>;
            {statusOptions}
        </Input>

    );
};

class CreateUpdateTaskModalForm extends Component {
    constructor(props) {
        super(props);

        this.formFields = {
            index: props.index,
            name: '',
            description: '',
            when: '',
            status: '',
            createdAt: ''
        }

        this.handleInputChange = event => {
            let name, value, taskCreatedUpdated = null;
            if (event instanceof Date) {
                name = 'when';
                value = event;
            } else {
                name = event.target.name
                value = event.target.value
            }

            taskCreatedUpdated = this.state.formFields;
            taskCreatedUpdated[name] = value;
            this.setState({
                formFields: taskCreatedUpdated
            });
        }

        this.submitForm = () => {
            if (this.checkAllFields()) {
                this.props.submitForm(this.state.formFields)
                this.setState({
                    isOpen: false,
                    formFields: this.formFields
                });
            } else {
                this.setState({
                    submitError: true
                });
            }

        }

        this.state = {
            isOpen: false,
            formFields: this.formFields,
            submitError: false
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.checkAllFields = this.checkAllFields.bind(this);
    }

    close() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            formFields: {
                index: '',
                name: '',
                description: '',
                when: '',
                status: '',
                createdAt: ''
            },
            submitError: false
        }));
    }

    checkAllFields() {
        const { index, name, description, when, status } = this.state.formFields;
        return (name && description && when && status) || (index && name && description && when && status);
    }

    open(index, getItem) {

        // Need to compare like this because in JS, 0 is false
        // So the code below doesn't work 
        // if (index){
        //     ...
        // }

        if (index !== undefined && index !== null) {
            const task = getItem(index);
            this.setState({
                isOpen: true,
                formFields: {
                    index: index,
                    name: task.name,
                    description: task.description,
                    when: task.when,
                    status: task.status,
                    createdAt: task.createdAt
                }
            });
        } else {
            this.setState({
                isOpen: true,
                formFields: {
                    index: index,
                    name: '',
                    description: '',
                    when: '',
                    status: '',
                    createdAt: ''
                }
            });
        }
    }

    render() {
        const { name, description, when, status } = this.state.formFields;
        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={this.close}>
                    <ModalHeader toggle={this.close}>Modal title</ModalHeader>
                    <Alert color="danger" isOpen={this.state.submitError}>All fields must be filled</Alert>
                    <ModalBody>
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
                            <DatePicker
                                onChange={this.handleInputChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={5}
                                startDate={new Date()}
                                selected={when}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                            />

                            <label>Status</label>
                            <StatusOptionsSimpleComponent valueItem={status} statusList={statusList} handleSelectItem={this.handleInputChange} />
                        </form>



                    </ModalBody>
                    <ModalFooter>
                        <button className="submmit-cancel-buttons" type="button" onClick={this.submitForm} >Submmit</button>
                        <button className="submmit-cancel-buttons" onClick={this.close}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateUpdateTaskModalForm;