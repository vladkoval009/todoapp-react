import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';

class App extends Component {

  state = {
    todos: 
    [{title:'Take the rubbish out', id: 1, completed: true},
     {title:'Dinner', id: 2, completed: false},
     {title:'Meeting the boss', id: 3, completed: false},
    ]
  }
  
// Toggle Complete
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed //not completed.
    }
    return todo;
  }) });
}

//ADD TODO
//Using uuid module to generate IDs.
AddTodo = (title) => {

  const newTodo = {
    id: 4,
    title: '',
    completed:false
  }
   this.setState({ todos: [...this.state.todos, newTodo] });
}

//Delete Button Logic
//Passing the state object, copying whats stored in the state by using the spread operator '...this.state.todos'.
//Filter for each 'todo', we want to return where every todo.id is not (!==) thats passed through deleteTodo.
deleteTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});

}



  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
      <Header />
      <AddTodo AddTodo={this.AddTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>

      </header>
    </div>
    
  );
  };
}

export default App;
