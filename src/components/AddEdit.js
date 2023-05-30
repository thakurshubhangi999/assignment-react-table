import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import "./AddEdit.css";

const AddEdit = ({ data, setData }) => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, setValue } = useForm();
  const [photo, setPhoto] = useState('');

  const onSubmit = (formData) => {
    const { firstName, lastName, dateOfBirth, married, photo } = formData;

    const newData = {
      id: id || uuid(),
      firstName,
      lastName,
      dateOfBirth,
      married,
      photo: photo || 'default_photo.jpg',
    };

    if (id) {
      // Editing an existing record
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? newData : item))
      );
    } else {
      // Add a new record
      setData((prevData) => [...prevData, newData]);
    }

    history.push('/');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">{id ? 'Edit Record' : 'Add New Record'}</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>First Name:</label>
            <input {...register('firstName', { required: true })} />
          </div>
          <div>
            <label>Last Name:</label>
            <input {...register('lastName', { required: true })} />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input type="date" {...register('dateOfBirth', { required: true })} />
          </div>
          <div>
            <label>Married:</label>
            <input type="checkbox" {...register('married')} />
          </div>
          <div>
            <label>Photo:</label>
            <input type="file" onChange={handlePhotoChange} />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
