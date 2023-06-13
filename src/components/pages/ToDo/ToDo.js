import { Link } from 'react-router-dom';
import { fetchTasks } from 'redux/tasks/operationTasks';
import { TaskList } from './TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TaskEditor } from './TaskEditor/TaskEditor';

import { selectLoading } from 'redux/tasks/selectors';

export const ToDo = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h3>ToDo</h3>
      <Link to={'/'}>To Home</Link>

      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </div>
  );
};
