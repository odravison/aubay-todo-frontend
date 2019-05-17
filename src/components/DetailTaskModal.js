import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class DetailTaskModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            task: {}
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(task) {

        this.setState({
            isOpen: true,
            task: task
        })        
    }

    close() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            task: {}
        }));
    }


    render() {

        const { name, description, when, status } = this.state.task;

        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={this.close}>
                    <ModalHeader toggle={this.close}>Modal title</ModalHeader>
                    <ModalBody>

                        <label>Name</label>
                        <p>{name}</p>

                        <label>Description</label>
                        <p>{description}</p>

                        <label>When</label>
                        <p>{moment(when).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

                        <label>Status</label>
                        <p>{status}</p>


                    </ModalBody>
                    <ModalFooter>
                        <button className="submmit-cancel-buttons" onClick={this.close}>Close</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


export default DetailTaskModal;