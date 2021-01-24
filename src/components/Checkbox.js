import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import axios from 'axios';

export const Checkbox = ({ id, taskDesc }) => {
  const archiveTask = () => {
    axios.put("/task", {id: id, archived: true}, {});
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
      onKeyDown={(e) => {
        if (e.key === 'Enter') archiveTask();
      }}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
};