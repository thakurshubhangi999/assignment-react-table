import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';
import './Main.css';

const Main = ({ data, onDelete }) => {
  return (
    <div className="container">
      <h1 className="title">Main Screen</h1>
      <Link to="/add" className="link-add">Add New</Link>
      <Table data={data} onDelete={onDelete} />
    </div>
  );
};

export default Main;
