// src/pages/Teachers.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Teachers = () => {
  // CRUD complet pour la gestion des enseignants
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    phone: '',
    subjects: '',
    hireDate: '',
    status: 'Actif'
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInputChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editingIndex === -1){
      setTeachers([...teachers, newTeacher]);
    } else {
      const updatedTeachers = [...teachers];
      updatedTeachers[editingIndex] = newTeacher;
      setTeachers(updatedTeachers);
      setEditingIndex(-1);
    }
    setNewTeacher({ name: '', email: '', phone: '', subjects: '', hireDate: '', status: 'Actif' });
  };

  const handleEdit = (index) => {
    setNewTeacher(teachers[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setTeachers(teachers.filter((_, i) => i !== index));
    if(editingIndex === index) {
      setNewTeacher({ name: '', email: '', phone: '', subjects: '', hireDate: '', status: 'Actif' });
      setEditingIndex(-1);
    }
  };

  return (
    <div className="teachers-page">
      <h1>Gestion des Enseignants</h1>
      <form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nom" value={newTeacher.name} onChange={handleInputChange} />
        <Input name="email" placeholder="Email" value={newTeacher.email} onChange={handleInputChange} />
        <Input name="phone" placeholder="Téléphone" value={newTeacher.phone} onChange={handleInputChange} />
        <Input name="subjects" placeholder="Matières enseignées" value={newTeacher.subjects} onChange={handleInputChange} />
        <Input name="hireDate" placeholder="Date d'embauche" value={newTeacher.hireDate} onChange={handleInputChange} />
        <Button type="submit" label={editingIndex === -1 ? "Ajouter Enseignant" : "Mettre à jour"} />
      </form>
      <div className="teachers-list">
        {teachers.map((teacher, index) => (
          <div key={index} className="card-container">
            <Card title={teacher.name} content={`Email: ${teacher.email}`} />
            <div className="card-actions">
              <Button type="button" label="Modifier" onClick={() => handleEdit(index)} className="btn-edit" />
              <Button type="button" label="Supprimer" onClick={() => handleDelete(index)} className="btn-delete" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
