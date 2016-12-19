import * as React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo';
import Footer from './Footer'
import MastermindCard from './MastermindCard/index';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <MastermindCard />
  </div>
);

export default App;