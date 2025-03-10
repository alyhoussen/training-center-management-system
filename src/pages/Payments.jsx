// src/pages/Payments.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Payments = () => {
  // CRUD complet pour la gestion des paiements
  // Enregistre également le nom de l'étudiant ayant payé
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    studentName: '',
    amount: '',
    date: '',
    method: '',
    status: 'payé'
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editingIndex === -1) {
      setPayments([...payments, newPayment]);
    } else {
      const updatedPayments = [...payments];
      updatedPayments[editingIndex] = newPayment;
      setPayments(updatedPayments);
      setEditingIndex(-1);
    }
    setNewPayment({ studentName: '', amount: '', date: '', method: '', status: 'payé' });
  };

  const handleEdit = (index) => {
    setNewPayment(payments[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setPayments(payments.filter((_, i) => i !== index));
    if(editingIndex === index) {
      setNewPayment({ studentName: '', amount: '', date: '', method: '', status: 'payé' });
      setEditingIndex(-1);
    }
  };

  return (
    <div className="payments-page">
      <h1>Gestion des Paiements</h1>
      <form onSubmit={handleSubmit}>
        <Input name="studentName" placeholder="Nom de l'étudiant" value={newPayment.studentName} onChange={handleInputChange} />
        <Input name="amount" placeholder="Montant" value={newPayment.amount} onChange={handleInputChange} />
        <Input name="date" placeholder="Date" value={newPayment.date} onChange={handleInputChange} />
        <Input name="method" placeholder="Méthode de paiement" value={newPayment.method} onChange={handleInputChange} />
        <Button type="submit" label={editingIndex === -1 ? "Enregistrer Paiement" : "Mettre à jour"} />
      </form>
      <div className="payments-list">
        {payments.map((payment, index) => (
          <div key={index} className="card-container">
            <Card 
              title={`Paiement ${index + 1}`}
              content={`Étudiant: ${payment.studentName} | Montant: ${payment.amount}`}
            />
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

export default Payments;
