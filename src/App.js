import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './mycomponents/Header';
import Footer from './mycomponents/Footer';
import TodoFlow from './mycomponents/TodoFlow';
import About from './mycomponents/About';
import MyTasks from './mycomponents/MyTasks';

function App() {
  return (
    <Router>
      <Header title="My Tasks" />

      <Routes>
        <Route path="/" element={<TodoFlow />} />
        <Route path="/about" element={<About />} />
        <Route path="/mytasks" element={<MyTasks />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
