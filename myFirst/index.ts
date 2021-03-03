import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then(res => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed)
  
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The TODO with id: ${id}
  Has title of: ${title}

  Is it completed, you ask? ${completed ? 'Yes, sir!' : 'Sorry, no! :('}
`);
}