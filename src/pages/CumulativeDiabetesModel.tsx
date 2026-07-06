import { useEffect } from 'react';

export default function CumulativeDiabetesModel() {
  useEffect(() => {
    window.location.href =
      'https://bone-tenna-ai-tz3ybchntdrxrc5rqnk5ug.streamlit.app/';
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
      Redirecting to HbA1c AI...
    </div>
  );
}