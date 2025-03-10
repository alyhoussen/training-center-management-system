// src/pages/Students.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Students = () => {
  // CRUD complet pour la gestion des élèves
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    status: 'En attente'
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex === -1) {
      setStudents([...students, newStudent]);
    } else {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = newStudent;
      setStudents(updatedStudents);
      setEditingIndex(-1);
    }
    setNewStudent({ name: '', email: '', phone: '', dob: '', address: '', status: 'En attente' });
  };

  const handleEdit = (index) => {
    setNewStudent(students[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setNewStudent({ name: '', email: '', phone: '', dob: '', address: '', status: 'En attente' });
      setEditingIndex(-1);
    }
  };

  return (
    <div className="students-page">
      <h1>Gestion des Élèves</h1>
      <form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nom" value={newStudent.name} onChange={handleInputChange} />
        <Input name="email" placeholder="Email" value={newStudent.email} onChange={handleInputChange} />
        <Input name="phone" placeholder="Téléphone" value={newStudent.phone} onChange={handleInputChange} />
        <Input name="dob" placeholder="Date de Naissance" value={newStudent.dob} onChange={handleInputChange} />
        <Input name="address" placeholder="Adresse" value={newStudent.address} onChange={handleInputChange} />
        <Button type="submit" label={editingIndex === -1 ? "Inscrire l'élève" : "Mettre à jour"} />
      </form>
      <div className="students-list">
        {students.map((student, index) => (
          <div key={index} className="card-container">
            <Card title={student.name} content={`Email: ${student.email}`} />
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

export default Students;
