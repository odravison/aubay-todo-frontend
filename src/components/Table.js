import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Table.css';

const RemoveButtonSimpleComponent = props => {
  const { removeAction, targetItem } = props;

  return (
    <button
      onClick={() => {
        removeAction(targetItem);
      }}
    >
      {' '}
      Remove{' '}
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
        <th key="actions"> Actions </th>
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
        <td>
          <RemoveButtonSimpleComponent
            removeAction={props.removeItem}
            targetItem={index}
          />
        </td>
      </tr>
    );
  });

  return <tbody>{bodyTable}</tbody>;
};

class Table extends Component {
  render() {
    const { dataList, headDataList, removeTask } = this.props;

    return (
      <table>
        <HeadTableSimpleComponent headList={headDataList} />
        <BodyTableSimpleComponent dataBody={dataList} removeItem={removeTask} />
      </table>
    );
  }
}

export default Table;
