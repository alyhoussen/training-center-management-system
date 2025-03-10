import React, { useState } from 'react';

const Payment = () => {
  const [payments, setPayments] = useState([
    { id: 1, studentName: 'John Doe', amount: '2000', date: '2025-02-01', status: 'Paid' },
    { id: 2, studentName: 'Jane Smith', amount: '2500', date: '2025-02-02', status: 'Pending' },
    { id: 3, studentName: 'Alice Johnson', amount: '2200', date: '2025-02-03', status: 'Paid' },
  ]);

  const [newPayment, setNewPayment] = useState({
    studentName: '',
    amount: '',
    date: '',
    status: 'Pending',
  });

  const handleInputChange = (e) => {
    setNewPayment({
      ...newPayment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setPayments([...payments, { ...newPayment, id: payments.length + 1 }]);
    setNewPayment({ studentName: '', amount: '', date: '', status: 'Pending' });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Paiement des Frais de Scolarité</h1>

      {/* Formulaire d'ajout de paiement */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ajouter un Paiement</h2>
        <form onSubmit={handleSubmitPayment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="studentName"
              value={newPayment.studentName}
              onChange={handleInputChange}
              placeholder="Nom de l'étudiant"
              className="input input-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="amount"
              value={newPayment.amount}
              onChange={handleInputChange}
              placeholder="Montant"
              className="input input-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="date"
              value={newPayment.date}
              onChange={handleInputChange}
              className="input input-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="status"
              value={newPayment.status}
              onChange={handleInputChange}
              className="select select-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pending">En attente</option>
              <option value="Paid">Payé</option>
            </select>
          </div>
          <div className="mt-4">
            <button type="submit" className="btn bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
              Ajouter le Paiement
            </button>
          </div>
        </form>
      </div>

      {/* Liste des paiements */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Liste des Paiements</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left text-sm">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-6 font-semibold">Nom de l'Étudiant</th>
                <th className="py-3 px-6 font-semibold">Montant</th>
                <th className="py-3 px-6 font-semibold">Date</th>
                <th className="py-3 px-6 font-semibold">Statut</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">{payment.studentName}</td>
                  <td className="py-4 px-6">{payment.amount} AR</td>
                  <td className="py-4 px-6">{payment.date}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-white ${payment.status === 'Paid' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;