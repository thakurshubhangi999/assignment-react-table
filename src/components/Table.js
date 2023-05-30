import React from 'react';
import { Link } from 'react-router-dom';
import "./Table.css";

const Table = ({ data, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Married</th>
          <th>Photo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.married ? 'Yes' : 'No'}</td>
            <td>
              <img src={item.photo} alt="Profile" width="50" height="50" />
            </td>

            <td className='actions'>
              <Link to={`/edit/${item.id}`} className="link-edit">Edit</Link>
              <button onClick={() => onDelete(item.id)} >Delete</button>
</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
