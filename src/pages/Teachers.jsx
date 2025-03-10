import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Paul Durand",
      email: "paul.durand@example.com",
      subject: "Mathématiques",
      phone: "0612345678",
      address: "12 Rue Victor Hugo",
      hireDate: "2015-09-01",
      status: "Actif",
    },
    {
      id: 2,
      name: "Sophie Martin",
      email: "sophie.martin@example.com",
      subject: "Physique",
      phone: "0623456789",
      address: "34 Avenue de Lyon",
      hireDate: "2018-06-15",
      status: "En congé",
    },
  ]);

  const [editingTeacher, setEditingTeacher] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    address: "",
    hireDate: "",
    status: "Actif",
  });

  useEffect(() => {
    if (editingTeacher) {
      setFormData(editingTeacher);
    } else {
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        address: "",
        hireDate: "",
        status: "Actif",
      });
    }
  }, [editingTeacher]);

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "" || formData.email.trim() === "") return;

    if (editingTeacher) {
      setTeachers(teachers.map((t) => (t.id === formData.id ? formData : t)));
      setEditingTeacher(null);
    } else {
      setTeachers([...teachers, { ...formData, id: Date.now() }]);
    }
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      address: "",
      hireDate: "",
      status: "Actif",
    });
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Gestion des enseignants</h2>

        {/* Formulaire */}
        <form onSubmit={handleSave} className="mb-4 p-4 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nom" className="p-2 border border-gray-300 rounded" required />
            <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" className="p-2 border border-gray-300 rounded" required />
            <input type="text" name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Matière enseignée" className="p-2 border border-gray-300 rounded" />
            <input type="text" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Téléphone" className="p-2 border border-gray-300 rounded" />
            <input type="text" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Adresse" className="p-2 border border-gray-300 rounded" />
            <input type="date" name="hireDate" value={formData.hireDate} onChange={(e) => setFormData({ ...formData, hireDate: e.target.value })} className="p-2 border border-gray-300 rounded" />
            <select name="status" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="p-2 border border-gray-300 rounded">
              <option value="Actif">Actif</option>
              <option value="En congé">En congé</option>
              <option value="Retraité">Retraité</option>
            </select>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            {editingTeacher ? "Mettre à jour" : "Ajouter"}
          </button>
        </form>

        {/* Tableau Responsive */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Matière</th>
                <th className="py-2 px-4 border-b">Téléphone</th>
                <th className="py-2 px-4 border-b">Adresse</th>
                <th className="py-2 px-4 border-b">Date d'embauche</th>
                <th className="py-2 px-4 border-b">Statut</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{teacher.name}</td>
                  <td className="py-2 px-4 border-b">{teacher.email}</td>
                  <td className="py-2 px-4 border-b">{teacher.subject}</td>
                  <td className="py-2 px-4 border-b">{teacher.phone}</td>
                  <td className="py-2 px-4 border-b">{teacher.address}</td>
                  <td className="py-2 px-4 border-b">{teacher.hireDate}</td>
                  <td className="py-2 px-4 border-b">{teacher.status}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button onClick={() => setEditingTeacher(teacher)} className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                    <button onClick={() => handleDelete(teacher.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
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

export default Teachers;