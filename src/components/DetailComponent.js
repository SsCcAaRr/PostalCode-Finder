import React from 'react';
import './Detail.css';

const DetailComponent = ({ data, clearInfo }) => {
  if (data === null) return null;

  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  if (!data.country) {
    return <div className="loader">Featching Details ...</div>;
  }

  return (
    <div>
      <button onClick={clearInfo} style={{ marginTop: '20px' }} >Search Another</button>
      <h2>Location Details:</h2>
      <p>Country: {data.country}</p>
      <div className='content'>
        {data.places.map((place, index) => (
          <div className='card' key={index}>
            <p>Place Name: {place['place name']}</p>
            <p>State: {place.state}</p>
            <p>Longitude: {place.longitude}</p>
            <p>Latitude: {place.latitude}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailComponent;
