// src/pages/Home.jsx
import React from 'react';
import Header from '../component/Header';
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <main className='body'>
        <p>Welcome to the Main Page!</p>
        <div>
          <div>
            <p>Welcome to my page</p>
          </div>
          <div>
            <h2>hello</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
