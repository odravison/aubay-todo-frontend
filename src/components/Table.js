import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Table.css';

const RemoveButtonSimpleComponent = props => {
    const { removeAction, targetItem } = props;
    return (
        <button onClick={() => { removeAction(targetItem); }} style={{ color: 'red', opacity: 0.7 }}>
            <FontAwesomeIcon icon="trash-alt" />
        </button>
    );
};

const EditButtonSimpleComponent = props => {
    const { editAction, targetItem } = props;

    return (
        <button onClick={() => { editAction(targetItem); }}>
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
    
    const bodyTable = props.dataBody.map((element, index) => {
        return (
            <tr key={index}>
                <td>{element.name}</td>
                <td>{element.status}</td>
                <td>{element.when}</td>
                <td className="actions-buttons">
                    <DetailButtonSimpleComponent detailAction={props.detailItem} targetItem={index} />
                    <EditButtonSimpleComponent editAction={props.editItem} targetItem={index} />
                    <RemoveButtonSimpleComponent removeAction={props.removeItem} targetItem={index} />
                </td>
            </tr>
        );
    });

    return <tbody>{bodyTable}</tbody>;
};

class Table extends Component {

    render() {
        const { dataList, headDataList, removeTask, editTask, detailTask } = this.props;
        return (
            <table>
                <HeadTableSimpleComponent headList={headDataList} />
                <BodyTableSimpleComponent
                    dataBody={dataList}
                    removeItem={removeTask}
                    editItem={editTask}
                    detailItem={detailTask} />
            </table>
        );
    }
}

export default Table;
