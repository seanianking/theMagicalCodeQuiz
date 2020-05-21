import React, { useReducer, useRef } from "react";
import "./App.css";

function TodoList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          name: action.name
        }
      ];
      // Bonus: Remove a todo from the list.
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>

      <h4>My Todo List:</h4>
      
    </div>
  );
}

export default TodoList;
