import React, { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import DetailComponent from './components/DetailComponent'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (postalCode) => {
    if (!postalCode) {
      setError("NO DATA PASSED");
      return;
    }

    // Denoting API
    const apiUrl = `https://api.zippopotam.us/in/${postalCode}`;
    
    setLoading(true);
    setData(null);
    setError(null); 

    // Fetching data
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok || !response.headers.get('content-type').startsWith('application/json')) {
          throw new Error("Currently - No data avalible.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setData({ error: error.message });
        setLoading(false);
      });
  };

  const clearInfo = () => {
    setData(null);
    setError(null);
  };

  return (
    <div className="container">
      <h1>Location Finder</h1>
      <FormComponent onSearch={fetchData} />
      {error ? (
        <div style={{ marginTop: '20px' }}>{error}</div>
      ) : loading ? (
        <div className='loader'>Featching Details ...</div>
      ) : (
        <DetailComponent data={data} clearInfo={clearInfo} />
      )}
    </div>
  );
}

export default App;
