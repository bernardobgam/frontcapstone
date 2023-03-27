import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = (props) => {
  const { handleSubmit, availableTimes } = props;

  const formik = useFormik({
    initialValues: {
      numDinners: '',
      date: '',
      time: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      comments: '',
      occasion: '',
    },
    validationSchema: Yup.object({
      numDinners: Yup.number().required().min(2, 'Minimum dinners for a reservation must be 2!'),
      date: Yup.date()
        .required()
        .default(() => new Date()),
      // time: '',
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      // phoneNumber: '',
      // comments: '',
      // occasion: '',
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  // console.log('availableTimes', availableTimes);

  return (
    <>
      <h2>Book Now</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-item">
          <label htmlFor="numDinners">Number of Dinners*:</label>
          <input
            type="number"
            id="numDinners"
            name="numDinners"
            value={formik.values.numDinners}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="date">Date*:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="time">Time*:</label>
          <div className="select-custom">
            <select id="time" name="time" value={formik.values.time} onChange={formik.handleChange}>
              <option value="">Select Time</option>
              {availableTimes && availableTimes.map((time) => <option key={time}>{time}</option>)}
            </select>
          </div>
        </div>

        <div className="form-item">
          <label htmlFor="firstName">First Name*:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="lastName">Last Name*:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="phoneNumber">Phone Number*:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="occasion">Occasion:</label>
          <div className="select-custom">
            <select
              id="occasion"
              name="occasion"
              value={formik.values.occasion}
              onChange={formik.handleChange}
            >
              <option value="">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="form-item">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            value={formik.values.comments}
            onChange={formik.handleChange}
          ></textarea>
        </div>

        <button type="submit" aria-label="Submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default BookingForm;
