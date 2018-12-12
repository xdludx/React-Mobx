import React from "react";
import ReactDOM from "react-dom";
import MobxTest from './mobx/index';
import './index.scss';

const store = new MobxTest();

const Index = () => {
  return (
    <MobxTest todoList={store} />
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));