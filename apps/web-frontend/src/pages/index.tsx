import { useState } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [active, setActive] = useState<'doctor' | 'patient' | ''>('');

  const fetchMessage = async (type: 'doctor' | 'patient') => {
    setActive(type);
    const res = await fetch(`http://localhost:3001/${type}`);
    const text = await res.text();
    setMessage(text);
  };

  const buttonStyle = (type: 'doctor' | 'patient') => ({
    padding: '10px 25px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    background: active === type ? 'linear-gradient(to right, #6366f1, #3b82f6)' : '#e0e7ff',
    color: active === type ? 'white' : '#1e3a8a',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  return (
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #c7d2fe, #e0f2fe)',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1e3a8a' }}>
        Doctor Appointment Portal
      </h1>

      <div style={{ marginBottom: '2rem' }}>
        <button style={buttonStyle('doctor')} onClick={() => fetchMessage('doctor')}>
          Doctor
        </button>
        <button style={buttonStyle('patient')} onClick={() => fetchMessage('patient')}>
          Patient
        </button>
      </div>

      <div
        style={{
          background: 'white',
          padding: '2rem 3rem',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          minWidth: '300px',
          textAlign: 'center',
          color: '#1f2937',
          fontSize: '1.25rem',
          fontWeight: '500',
        }}
      >
        {message || 'Please choose Doctor or Patient'}
      </div>
    </div>
  );
}
