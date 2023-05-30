import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Edit = ({ data, setData }) => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, setValue } = useForm();
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const selectedData = data.find((item) => item.id === id);
    if (selectedData) {
      setValue('firstName', selectedData.firstName);
      setValue('lastName', selectedData.lastName);
      setValue('dateOfBirth', selectedData.dateOfBirth);
      setValue('married', selectedData.married);
    }
  }, [data, id, setValue]);

  const onSubmit = (formData) => {
    const { firstName, lastName, dateOfBirth, married } = formData;

    const updatedData = {
      id,
      firstName,
      lastName,
      dateOfBirth,
      married,
      photo: photo || 'default_photo.jpg',
    };

    setData((prevData) =>
      prevData.map((item) => (item.id === id ? updatedData : item))
    );

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
    <div>
      <h1>Edit Record</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default Edit;
