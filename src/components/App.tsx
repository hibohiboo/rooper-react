import * as React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo';
import Footer from './Footer'
import VisibleMastermindCard from '../containers/VisibleMastermindCard';
import InputForm from './InputForm/index';

const App = () => (
  <div>
    <InputForm />
    <VisibleMastermindCard />
  </div>
);

export default App;