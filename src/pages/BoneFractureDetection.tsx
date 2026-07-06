import { useEffect } from 'react';

export default function BoneFractureDetection() {
  useEffect(() => {
    window.location.href =
      'https://bone-tenna-ai-p7e7hvqm4rgaavwffabpcz.streamlit.app/';
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
      Redirecting to Bone-Tenna AI...
    </div>
  );
}