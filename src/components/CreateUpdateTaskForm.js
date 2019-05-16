import React, { Component } from 'react';
import './CreateUpdateTaskModalForm.css';

import DatePicker from "react-datepicker";

import { statusList } from '../virtual-persistent-data/data';

import "react-datepicker/dist/react-datepicker.css";

import { DropdownItem, Dropdown, DropdownMenu, DropdownToggle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const StatusOptionsSimpleComponent = props => {
    const statusOptions = props.statusList.map((element, index) => {
        return <DropdownItem key={index}>{element}</DropdownItem>;
    });

    return (
        <DropdownMenu>
            {statusOptions}
        </DropdownMenu>
        
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
                formFields: taskCreatedUpdated,
                dropdownOpen: this.state.dropdownOpen
            });
        }

        this.submitForm = () => {
            const task = this.state.formFields;
            task.when = task.when.toJSON();

            this.props.submitForm(this.state.formFields)
            this.setState({
                isOpen: false,
                formFields: this.formFields,
                dropdownOpen: false
            });
        }

        this.state = {
            isOpen: false,
            formFields: this.formFields,
            dropdownOpen: false
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.toggleDropDownStatus = this.toggleDropDownStatus.bind(this);
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
            }
        }));
    }

    open() {
        this.setState({
            isOpen: true,
            formFields: {
                index: '',
                name: '',
                description: '',
                when: '',
                status: '',
                createdAt: ''
            }
        });
    }

    toggleDropDownStatus() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { name, description, when, status } = this.state.formFields;
        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={this.close}>
                    <ModalHeader toggle={this.close}>Modal title</ModalHeader>
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
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                            />

                            <label>Status</label>
                            {/* <input
                                type="text"
                                name="status"
                                value={status}
                                onChange={this.handleInputChange} /> */}
                            <Dropdown className="dropdown-buttons" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDownStatus}>
                                <DropdownToggle caret>
                                    Select status
                                </DropdownToggle>
                                
                                <StatusOptionsSimpleComponent statusList={statusList} />

                            </Dropdown>
                        </form>



                    </ModalBody>
                    <ModalFooter>
                        <button className="submmit-button" type="button" onClick={this.submitForm} > submmit </button>
                        <button color="secondary" onClick={this.close}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateUpdateTaskModalForm;

// class CreateUpdateTaskModalForm extends Component {
//     constructor(props) {


//     }

//     render() {
//         const { name, description, when, status } = this.state;

//         return (
//             <div className="container">
//             </div>

//         );
//     }
// }

// export default CreateUpdateTaskModalForm;