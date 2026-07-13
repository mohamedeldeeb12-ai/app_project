import { useEffect } from 'react';

export default function BoneFractureDetection() {
  useEffect(() => {
    window.location.href =
      'https://bone-ai-3qb8x6ku7wgmhs4qmpidvj.streamlit.app/';
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
    >
      Redirecting to Bone AI...
    </div>
  );
}