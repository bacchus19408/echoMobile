import React, {useState, useEffect} from 'react';

const FindDoctorsScreen = () => {
  const [category, setCategory] = useState('');
  const [recommendedDoctors, setRecommendedDoctors] = useState([]);
  const [recentDoctors, setRecentDoctors] = useState([]);

  // Fetch recommended doctors based on category
  useEffect(() => {
    const fetchRecommendedDoctors = async () => {
      try {
        // Make an API call to fetch recommended doctors based on the selected category
        const response = await fetch(`/api/doctors?category=${category}`);
        const data = await response.json();
        setRecommendedDoctors(data);
      } catch (error) {
        console.error('Error fetching recommended doctors:', error);
      }
    };

    if (category) {
      fetchRecommendedDoctors();
    }
  }, [category]);

  // Fetch recent doctors
  useEffect(() => {
    const fetchRecentDoctors = async () => {
      try {
        // Make an API call to fetch recent doctors
        const response = await fetch('/api/doctors/recent');
        const data = await response.json();
        setRecentDoctors(data);
      } catch (error) {
        console.error('Error fetching recent doctors:', error);
      }
    };

    fetchRecentDoctors();
  }, []);

  return (
    <div>
      <h1>Find Doctors</h1>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="cardiology">Cardiology</option>
        <option value="dermatology">Dermatology</option>
        <option value="orthopedics">Orthopedics</option>
        {/* Add more options for different categories */}
      </select>

      <h2>Recommended Doctors</h2>
      <ul>
        {recommendedDoctors.map(doctor => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>

      <h2>Recent Doctors</h2>
      <ul>
        {recentDoctors.map(doctor => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FindDoctorsScreen;
