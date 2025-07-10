export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const taskLabel = todosLength !== 1 ? 'tasks' : 'task';
  //const taskorTasks = isTasksPlural ? 'tasks' : 'task';

  return (
    <header>
      <h1 className="text-gradient">You have {todosLength} open {taskLabel}</h1>
    </header>
  )
}