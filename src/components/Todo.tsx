import React from "react";
import { connect } from "react-redux";
import { TodoState, DELETE, deleteToDo } from "~store";
import { RouteComponentProps } from "react-router-dom";

interface TodoProps extends RouteComponentProps<any> {
  text: string;
  id: number;
  onBtnClick: () => {};
}

function Todo({ text, id, onBtnClick }: TodoProps) {
  return (
    <li id={id.toString()}>
      {text}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    onBtnClick: () => dispatch(deleteToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(Todo);
