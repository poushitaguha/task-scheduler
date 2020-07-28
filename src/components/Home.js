import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='text-section'>
        <h1>Welcome to the Dispatcher/Driver Task Scheduling App</h1>
      </div>
      <div className='schedule-section'>
        <Link to='/schedule' className='btn btn-lg btn-info scheduleBtn'>
          View Schedule
        </Link>
      </div>
    </div>
  );
}
