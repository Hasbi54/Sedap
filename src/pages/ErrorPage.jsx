import React from 'react';

const ErrorPage = ({ code, message, image }) => {
  return (
    <div className="text-center">
      <img src={image} alt={`Error ${code}`} className="mx-auto mb-4" />
      <h1 className="text-4xl font-bold text-gray-700">{code}</h1>
      <p className="text-xl text-gray-600">{message}</p>
    </div>
  );
};

export default ErrorPage;
