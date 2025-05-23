import React, { useState, useEffect } from 'react';
import ordersData from "../assets/Data/ordersData.json";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newOrder, setNewOrder] = useState({
    orderId: '',
    customerName: '',
    status: '',
    totalPrice: '',
    orderDate: ''
  });

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const handleAddOrder = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([...orders, newOrder]);
    setNewOrder({
      orderId: '',
      customerName: '',
      status: '',
      totalPrice: '',
      orderDate: ''
    });
    setShowForm(false);
  };

  return (
    <div>
      <h1>Orders</h1>
      <button onClick={handleAddOrder} className="bg-blue-500 text-white p-2 rounded">Add Order</button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <input name="orderId" value={newOrder.orderId} onChange={handleChange} placeholder="Order ID" className="border p-2 w-full" required />
          <input name="customerName" value={newOrder.customerName} onChange={handleChange} placeholder="Customer Name" className="border p-2 w-full" required />
          <input name="status" value={newOrder.status} onChange={handleChange} placeholder="Status" className="border p-2 w-full" required />
          <input name="totalPrice" value={newOrder.totalPrice} onChange={handleChange} placeholder="Total Price" className="border p-2 w-full" required />
          <input name="orderDate" value={newOrder.orderDate} onChange={handleChange} placeholder="Order Date (YYYY-MM-DD)" className="border p-2 w-full" required />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Simpan</button>
        </form>
      )}

      <table className="mt-4 table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Total Price</th>
            <th className="border px-4 py-2">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{order.orderId}</td>
              <td className="border px-4 py-2">{order.customerName}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">{order.totalPrice}</td>
              <td className="border px-4 py-2">{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
