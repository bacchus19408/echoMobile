import React, {useState} from 'react';

const ScheduleScreen = () => {
  const [appointments, setAppointments] = useState([]);

  // Function to add a new appointment
  const addAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  };

  // Function to mark an appointment as completed
  const markAsCompleted = id => {
    setAppointments(
      appointments.map(appointment => {
        if (appointment.id === id) {
          return {...appointment, status: 'completed'};
        }
        return appointment;
      }),
    );
  };

  // Function to cancel an appointment
  const cancelAppointment = id => {
    setAppointments(
      appointments.map(appointment => {
        if (appointment.id === id) {
          return {...appointment, status: 'canceled'};
        }
        return appointment;
      }),
    );
  };

  return (
    <div>
      <h1>Schedule</h1>

      {/* Form to add a new appointment */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={newAppointment} onChange={handleChange} />
        <button type="submit">Add Appointment</button>
      </form>

      {/* List of upcoming appointments */}
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map(
          appointment =>
            appointment.status === 'upcoming' && (
              <li key={appointment.id}>
                {appointment.title}
                <button onClick={() => markAsCompleted(appointment.id)}>
                  Mark as Completed
                </button>
                <button onClick={() => cancelAppointment(appointment.id)}>
                  Cancel
                </button>
              </li>
            ),
        )}
      </ul>

      {/* List of completed appointments */}
      <h2>Completed Appointments</h2>
      <ul>
        {appointments.map(
          appointment =>
            appointment.status === 'completed' && (
              <li key={appointment.id}>{appointment.title}</li>
            ),
        )}
      </ul>

      {/* List of canceled appointments */}
      <h2>Canceled Appointments</h2>
      <ul>
        {appointments.map(
          appointment =>
            appointment.status === 'canceled' && (
              <li key={appointment.id}>{appointment.title}</li>
            ),
        )}
      </ul>
    </div>
  );
};

export default ScheduleScreen;
