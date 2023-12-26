import * as actionTypes from './actiontypes';

export const addTask = (task) => ({
  type: actionTypes.ADD_TASK,
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: actionTypes.TOGGLE_TASK,
  payload: taskId,
});

export const filterTasks = (filterType) => ({
  type: actionTypes.FILTER_TASKS,
  payload: filterType,
});

export const editTask = (taskId, newDescription) => ({
  type: actionTypes.EDIT_TASK,
  payload: { taskId, newDescription },
});

export const deleteTask = (taskId) => ({
  type: actionTypes.DELETE_TASK,
  payload: taskId,
});
