import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment'

import './Table.css';
import DetailTaskModal from './DetailTaskModal';
import CreateUpdateTaskModalForm from './CreateUpdateTaskForm';

const RemoveButtonSimpleComponent = props => {
    const { removeAction, targetItem } = props;
    return (
        <button onClick={() => { removeAction(targetItem); }} style={{ color: 'red', opacity: 0.7 }}>
            <FontAwesomeIcon icon="trash-alt" />
        </button>
    );
};

const EditButtonSimpleComponent = props => {
    const { openEditItemModal, targetItem, getItem } = props;

    return (
        <button onClick={() => { openEditItemModal(targetItem, getItem); }}>
            <FontAwesomeIcon icon="edit" />
        </button>
    );
};

const DetailButtonSimpleComponent = props => {
    const { detailAction, targetItem } = props;

    return (
        <button onClick={() => { detailAction(targetItem); }} style={{ color: 'blue', opacity: 0.5 }}>
            <FontAwesomeIcon icon="eye" />
        </button>
    );
};

const HeadTableSimpleComponent = props => {
    const headRow = props.headList.map((element, index) => {
        return <th key={index}>{element}</th>;
    });

    return (
        <thead>
            <tr>
                {headRow}
                <th key="actions" className="actions-head"> Actions </th>
            </tr>
        </thead>
    );
};

const BodyTableSimpleComponent = props => {

    const { openEditItemModal, openDetailItemModal, removeItem, getItem } = props;

    const bodyTable = props.dataBody.map((element, index) => {
        return (
            <tr key={index}>
                <td>{element.name}</td>
                <td>{element.status}</td>
                <td>{moment(element.when).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                <td className="actions-buttons">
                    <DetailButtonSimpleComponent detailAction={openDetailItemModal} targetItem={index} />
                    <EditButtonSimpleComponent targetItem={index} getItem={getItem} openEditItemModal={openEditItemModal} />
                    <RemoveButtonSimpleComponent removeAction={removeItem} targetItem={index} />
                </td>
            </tr>
        );
    });

    return <tbody>{bodyTable}</tbody>;
};

class Table extends Component {

    constructor(props) {
        super(props);


        this.createNewTask = this.props.createNewTask

        this.showCreateUpdateModal = (index, getItem) => {
            this.refs.modalCreateUpdate.open(index, getItem);
        };

        this.openDetailItemModal = (index) => {
            this.refs.modalDetail.open(this.props.getItem(index));
        };

    }

    render() {
        const { dataList, headDataList, removeTask, getItem, editTask } = this.props;
        return (
            <div>
                <table>
                    <HeadTableSimpleComponent headList={headDataList} />
                    <BodyTableSimpleComponent
                        dataBody={dataList}
                        removeItem={removeTask}
                        getItem={getItem}
                        openEditItemModal={this.showCreateUpdateModal}
                        openDetailItemModal={this.openDetailItemModal} />
                </table>
                <CreateUpdateTaskModalForm ref="modalCreateUpdate" submitForm={editTask} />
                <DetailTaskModal ref="modalDetail" getTask={getItem} />
            </div>
        );
    }
}

export default Table;
