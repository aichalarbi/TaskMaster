import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask, deleteTask } from './redux/actions';
import Task from './task';
import { ListGroup } from 'react-bootstrap';

const ListTask = ({ tasks, filter, toggleTask, editTask, deleteTask }) => {
  const filteredTasks = tasks.filter(
    (task) =>
      filter === 'all' ||
      (filter === 'done' && task.isDone) ||
      (filter === 'notDone' && !task.isDone)
  );

  return (
    <ListGroup>
      {filteredTasks.map((task) => (
        <ListGroup.Item key={task.id}>
          <Task
            task={task}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

export default connect(mapStateToProps, { toggleTask, editTask, deleteTask })(
  ListTask
);
