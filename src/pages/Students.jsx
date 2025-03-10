import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const App = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Dupont",
      email: "alice@example.com",
      status: "Inscrit",
      birthDate: "1998-03-12",
      phone: "0123456789",
      address: "123 Rue de Paris",
      program: "Informatique",
      grades: "A",
    },
    {
      id: 2,
      name: "Jean Martin",
      email: "jean@example.com",
      status: "En attente",
      birthDate: "2000-07-24",
      phone: "0987654321",
      address: "456 Avenue de Lyon",
      program: "Mathématiques",
      grades: "B",
    },
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "En attente",
    birthDate: "",
    phone: "",
    address: "",
    program: "",
    grades: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData({
        name: "",
        email: "",
        status: "En attente",
        birthDate: "",
        phone: "",
        address: "",
        program: "",
        grades: "",
      });
    }
  }, [editingStudent]);

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "" || formData.email.trim() === "") return;  

    if (editingStudent) {
      setStudents(students.map((s) => (s.id === formData.id ? formData : s)));
      setEditingStudent(null);
    } else {
      setStudents([...students, { ...formData, id: Date.now() }]);
    }
    setFormData({
      name: "",
      email: "",
      status: "En attente",
      birthDate: "",
      phone: "",
      address: "",
      program: "",
      grades: "",
    });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Gestion des étudiants</h2>

        {/* Formulaire */}
        <form onSubmit={handleSave} className="mb-4 p-4 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nom" className="p-2 border border-gray-300 rounded" required />
            <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" className="p-2 border border-gray-300 rounded" required />
            <input type="date" name="birthDate" value={formData.birthDate} onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })} className="p-2 border border-gray-300 rounded" />
            <input type="text" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Téléphone" className="p-2 border border-gray-300 rounded" />
            <input type="text" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Adresse" className="p-2 border border-gray-300 rounded" />
            <input type="text" name="program" value={formData.program} onChange={(e) => setFormData({ ...formData, program: e.target.value })} placeholder="Programme" className="p-2 border border-gray-300 rounded" />
            <input type="text" name="grades" value={formData.grades} onChange={(e) => setFormData({ ...formData, grades: e.target.value })} placeholder="Notes" className="p-2 border border-gray-300 rounded" />
            <select name="status" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="p-2 border border-gray-300 rounded">
              <option value="En attente">En attente</option>
              <option value="Inscrit">Inscrit</option>
              <option value="Diplômé">Diplômé</option>
            </select>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            {editingStudent ? "Mettre à jour" : "Ajouter"}
          </button>
        </form>

        {/* Tableau Responsive */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Statut</th>
                <th className="py-2 px-4 border-b">Naissance</th>
                <th className="py-2 px-4 border-b">Téléphone</th>
                <th className="py-2 px-4 border-b">Adresse</th>
                <th className="py-2 px-4 border-b">Programme</th>
                <th className="py-2 px-4 border-b">Notes</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.email}</td>
                  <td className="py-2 px-4 border-b">{student.status}</td>
                  <td className="py-2 px-4 border-b">{student.birthDate}</td>
                  <td className="py-2 px-4 border-b">{student.phone}</td>
                  <td className="py-2 px-4 border-b">{student.address}</td>
                  <td className="py-2 px-4 border-b">{student.program}</td>
                  <td className="py-2 px-4 border-b">{student.grades}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button onClick={() => setEditingStudent(student)} className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                    <button onClick={() => handleDelete(student.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
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

export default App;