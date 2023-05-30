import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import AddEdit from './components/AddEdit';
import Edit from './components/Edit';
import './App.css';


const App = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Main data={data} onDelete={handleDelete} />} />
        <Route path="/add" render={() => <AddEdit data={data} setData={setData} />} />
        <Route path="/edit/:id" render={() => <Edit data={data} setData={setData} />} />
      </Switch>
    </Router>
  );
};

export default App;
