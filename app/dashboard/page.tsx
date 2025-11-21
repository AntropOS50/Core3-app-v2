'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [progress] = useState({
    currentWeek: 1,
    completedDays: 0,
    totalDays: 28,
    score: 0,
    streak: 0
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f3f4f6',
      padding: '30px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#111',
          marginBottom: '10px'
        }}>
          Dashboard
        </h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          4týdenní program: Stát se nenahraditelným v době AI
        </p>

        {/* Týdenní pokrok */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
            Týden {progress.currentWeek} / 4
          </h2>
          <div style={{
            width: '100%',
            height: '16px',
            background: '#e5e7eb',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '10px'
          }}>
            <div style={{
              width: `${(progress.completedDays / progress.totalDays) * 100}%`,
              height: '100%',
              background: '#3b82f6',
              transition: 'width 0.5s'
            }} />
          </div>
          <p style={{ color: '#666' }}>
            Dokončeno {progress.completedDays} z {progress.totalDays} dní
          </p>
        </div>

        {/* Gamifikace */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '25px',
            boxSh
