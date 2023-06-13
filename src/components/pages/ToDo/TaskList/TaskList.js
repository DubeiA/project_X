import { useSelector } from 'react-redux';
import { TaskCard } from '../TaskCard/TaskCard';
import { selectAllTasks } from 'redux/tasks/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li className={css.itemTask} key={id}>
          <TaskCard id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
