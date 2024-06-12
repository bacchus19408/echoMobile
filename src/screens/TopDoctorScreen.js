import React, {useState, useEffect} from 'react';

const TopDoctorScreen = () => {
  const [preferredDoctor, setPreferredDoctor] = useState(null);

  useEffect(() => {
    // Fetch the top doctor based on rating
    fetchPreferredDoctor()
      .then(doctor => {
        setPreferredDoctor(doctor);
      })
      .catch(error => {
        console.error('Error fetching preferred doctor:', error);
      });
  }, []);

  const fetchPreferredDoctor = async () => {
    // Make an API call to fetch the preferred doctor based on rating
    const response = await fetch('/api/doctors/top');
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <h1>Top Doctor</h1>
      {preferredDoctor ? (
        <div>
          <h2>{preferredDoctor.name}</h2>
          <p>Rating: {preferredDoctor.rating}</p>
          {/* Render additional doctor details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TopDoctorScreen;
