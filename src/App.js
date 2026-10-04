import './App.css';
import About from './components/About';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    settodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const [todos, settodos] = useState(initTodo);
  const addTodo = (title, desc) => {
    console.log("i m adding a todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodos([...todos, mytodo]);
  }
  const editTodo = (todo, title, desc) => {
    settodos(
      todos.map((e) => {
        if (e === todo) {
          return {
            ...e,
            title: title,
            desc: desc
          };
        }
        return e;
      })
    );
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Navbar title="TodosList" />
        <Switch>
          <Route exact path='/' render={() => {
            return (<>
              <AddTodo addTodo={addTodo} />
              <Todos editTodo={editTodo} todos={todos} ondelete={ondelete} />
            </>)
          }}>
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
