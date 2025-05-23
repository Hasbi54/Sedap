import React, { useState, useEffect } from 'react';
import customersData from '../assets/Data/customersData.json';
import PageHeader from '../components/PageHeader';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    customerId: '',
    customerName: '',
    email: '',
    phone: '',
    loyalty: ''
  });

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, form]);
    setForm({
      customerId: '',
      customerName: '',
      email: '',
      phone: '',
      loyalty: ''
    });
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader title="Customer" breadcrumb="Home / Customer">
  <button
    onClick={handleAddClick}
    className="bg-blue-600 text-white px-4 py-2 rounded"
  >
    Add Customer
  </button>
</PageHeader>

      {showForm && (
        <form onSubmit={handleFormSubmit} className="mb-4 space-y-2">
          <input type="text" placeholder="Customer ID" value={form.customerId} onChange={(e) => setForm({ ...form, customerId: e.target.value })} className="border p-2 w-full" required />
          <input type="text" placeholder="Customer Name" value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} className="border p-2 w-full" required />
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="border p-2 w-full" required />
          <input type="text" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="border p-2 w-full" required />
          <input type="text" placeholder="Loyalty (e.g. Gold, Silver)" value={form.loyalty} onChange={(e) => setForm({ ...form, loyalty: e.target.value })} className="border p-2 w-full" required />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      )}

      <table className="table-auto w-full border-collapse mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Customer ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{customer.customerId}</td>
              <td className="border px-4 py-2">{customer.customerName}</td>
              <td className="border px-4 py-2">{customer.email}</td>
              <td className="border px-4 py-2">{customer.phone}</td>
              <td className="border px-4 py-2">{customer.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
