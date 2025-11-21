'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DailyTrackerPage() {
  const [formData, setFormData] = useState({
    mood: 5,
    energy: 5,
    focus: 5,
    notes: '',
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`tracker-${today}`, JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f3f4f6',
      padding: '30px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#111'
          }}>
            📊 Denní tracker
          </h1>
          <Link href="/dashboard" style={{
            padding: '10px 20px',
            background: '#e5e7eb',
            color: '#374151',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            ← Zpět
          </Link>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Nálada */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Nálada (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.mood}
                onChange={(e) => setFormData({ ...formData, mood: parseInt(e.target.value) })}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
              <div style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginTop: '10px'
              }}>
                {formData.mood}
              </div>
            </div>

            {/* Energie */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Energie (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.energy}
                onChange={(e) => setFormData({ ...formData, energy: parseInt(e.target.value) })}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
              <div style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#10b981',
                marginTop: '10px'
              }}>
                {formData.energy}
              </div>
            </div>

            {/* Soustředění */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Soustředění (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.focus}
                onChange={(e) => setFormData({ ...formData, focus: parseInt(e.target.value) })}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
              <div style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#a855f7',
                marginTop: '10px'
              }}>
                {formData.focus}
              </div>
            </div>

            {/* Poznámky */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Poznámky
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                placeholder="Co ses dnes naučil? Jaké máš plány na zítra?"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>

            {/* Uložit */}
            <button
              onClick={handleSave}
              style={{
                width: '100%',
                padding: '16px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              💾 Uložit dnešní záznam
            </button>

            {saved && (
              <div style={{
                padding: '16px',
                background: '#d1fae5',
                color: '#065f46',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                ✅ Úspěšně uloženo!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
