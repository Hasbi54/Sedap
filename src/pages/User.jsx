import React from 'react';
import userData from '../assets/Data/User.json';
import "../assets/css/User.css";  // Pastikan path ini benar

const User = () => {
  return (
    <div className="user-table-container">
      <h2>Users List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Address</th>
            <th>University</th>
            <th>Company</th>
            <th>Bank Card</th>
            <th>Crypto</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.users && userData.users.length > 0 ? (
            userData.users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    width="50"
                    height="50"
                    className="user-avatar"
                  />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
                <td>{user.address.address}, {user.address.city}, {user.address.state}</td>
                <td>{user.university}</td>
                <td>{user.company.name}</td>
                <td>{user.bank.cardType} ({user.bank.cardExpire})</td>
                <td>{user.crypto.coin} Wallet: {user.crypto.wallet}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="13" className="no-data">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
