// src/data/students.js
// Mock data pour les étudiants
export const students = [
  {
    id: 1,
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '0123456789',
    dob: '2000-01-01',
    address: '123 Rue de Paris',
    status: 'Inscrit',
    payments: { total: 1000, paid: 800, status: 'partiellement payé' },
    attendance: { total: 30, absences: 2, justified: 1 },
    progress: { average: 14, evolution: 'stable' }
  },
  // Ajoutez d'autres étudiants au besoin
];
