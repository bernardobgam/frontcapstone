import React from 'react';
import './Booking.css';
import BookingForm from './BookingForm';
import { submitAPI } from '../../utils.js';
import { useNavigate } from 'react-router-dom';

const Booking = (props) => {
  const { availableTimes, updateTimes, initializeTimes, setBooking } = props;
  let navigate = useNavigate();

  const handleSubmit = (data) => {
    updateTimes();
    submitAPI(data);
    setBooking(data);
    navigate('/confirmed-booking');
  };

  return (
    <div className="booking">
      <BookingForm
        handleSubmit={handleSubmit}
        updateTimes={updateTimes}
        initializeTimes={initializeTimes}
        availableTimes={availableTimes}
      />
    </div>
  );
};

export default Booking;
