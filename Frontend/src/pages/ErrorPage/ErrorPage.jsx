// ErrorPage.js
import React from 'react';
import '../../App.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
    <h1 className="error-code">404</h1>
    <p className="error-message">Page Not Found</p>
    <div className="bounce">🙁</div>
  </div>
  );
};

export default ErrorPage;
