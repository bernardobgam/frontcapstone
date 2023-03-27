import React from 'react';
import './ConfirmedBooking.css';

const ConfirmedBooking = (props) => {
  const { booking } = props;
  return (
    <div className="confirmed">
      <h2>Confirmed Booking!</h2>
      <p>
        <b>Number of Dinners:</b> {booking.numDinners}
      </p>
      <p>
        <b>Date:</b> {booking.date}
      </p>
      <p>
        <b>Time:</b> {booking.time}
      </p>
      <p>
        <b>First Name:</b> {booking.firstName}
      </p>
      <p>
        <b>Last Name:</b> {booking.lastName}
      </p>
      <p>
        <b>Phone Number:</b> {booking.phoneNumber}
      </p>
      {booking.comments !== '' && (
        <p>
          <b>Comments:</b> {booking.comments}
        </p>
      )}
      {booking.occasion && (
        <p>
          <b>Occasion:</b> {booking.occasion}
        </p>
      )}
    </div>
  );
};

export default ConfirmedBooking;
