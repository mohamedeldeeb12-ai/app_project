import { useEffect } from 'react';

export default function StandardDiabetesModel() {
  useEffect(() => {
    window.location.href =
      'https://mteyjfvrqnhnlmu5hqmhgh.streamlit.app/';
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
      Redirecting to Standard Diabetes AI...
    </div>
  );
}