'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <div style={{
          width: '100px',
          height: '100px',
          margin: '0 auto 30px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '50px'
        }}>
          💡
        </div>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Stát se nenahraditelným<br/>
          <span style={{ fontSize: '42px' }}>v době AI</span>
        </h1>

        <p style={{
          fontSize: '20px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '30px'
        }}>
          4týdenní transformační program pro profesionály
        </p>

        <button
          onClick={() => router.push('/dashboard')}
          style={{
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            background: 'rgba(255,255,255,0.2)',
            border: '2px solid white',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.color = 'white';
          }}
        >
          Začít program →
        </button>

        <p style={{
          marginTop: '20px',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '14px'
        }}>
          Automatické přesměrování za 2 sekundy...
        </p>
      </div>
    </div>
  );
}
        </div>
      </div>
    </div>
  );
}
