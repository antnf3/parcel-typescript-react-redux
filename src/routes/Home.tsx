import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { ADD, TodoState, add } from "~store";
import Todo from "~components/Todo";

interface HomeProps extends RouteComponentProps<any> {
  toDos: TodoState[];
  addTodo: any;
}

function Home({ toDos, addTodo }: HomeProps) {
  const [text, setText] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setText(value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <Fragment>
      <h1>ToDo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo: any) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Fragment>
  );
}

function mapStateToProps(state: TodoState[]) {
  return { toDos: state };
}
function mapDispatchToProps(dispatch: any) {
  return {
    addTodo: (text: string) => dispatch(add(text))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
