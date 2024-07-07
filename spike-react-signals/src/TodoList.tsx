import { signal } from "@preact/signals-react";

const todos = signal([
  { text: "Buy groceries" },
  { text: "Walk the dog" },
]);

const text = signal("");

function addTodo() {
  todos.value = [...todos.value, { text: text.value }];
  text.value = ""; // Reset input value on add
}

// Check if our logic works
console.log(todos.value);
// Logs: [{text: "Buy groceries"}, {text: "Walk the dog"}]


// Simulate adding a new todo
text.value = "Tidy up";
addTodo();

// Check that it added the new item and cleared the `text` signal:
console.log(todos.value);
// Logs: [{text: "Buy groceries"}, {text: "Walk the dog"}, {text: "Tidy up"}]

console.log(text.value);  // Logs: ""


// @ts-expect-error
function removeTodo(todo) {
    todos.value = todos.value.filter(t => t !== todo);
  }
  

export function TodoList() {
  // @ts-expect-error
    const onInput = event => (text.value = event.currentTarget.value);
  
    return (
      <>
        <input value={text.value} onInput={onInput} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.value.map(todo => (
            <li>
              {todo.text}{' '}
              <button onClick={() => removeTodo(todo)}>❌</button>
            </li>
          ))}
        </ul>
      </>
    );
  }