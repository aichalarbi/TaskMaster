
import React, { useState } from 'react';

const Task = ({ task, toggleTask, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDescription(task.description);
  };

  const handleChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
