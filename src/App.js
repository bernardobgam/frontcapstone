import './App.css';
import React, { useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Booking from './components/Booking';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from 'components/Login';
import About from 'components/About';
import Menu from 'components/Menu';
import ConfirmedBooking from 'components/ConfirmedBooking';
import { fetchAPI } from './utils.js';

export const initializeTimesData = [
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
  '10:00 PM',
  '10:30 PM',
  '11:00 PM',
];

export function initializeTimes() {
  const date = new Date();
  return fetchAPI(date);
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateTimes':
      return state.filter((time) => time !== action.data);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initializeTimes());
  const [booking, setBooking] = React.useState({});

  const updateTimes = (time) => {
    dispatch({
      type: 'updateTimes',
      data: time,
    });
  };

  return (
    <BrowserRouter>
      <div data-test-id="app" className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/booking"
            element={
              <Booking
                availableTimes={state}
                updateTimes={updateTimes}
                initializeTimes={initializeTimes}
                setBooking={setBooking}
              />
            }
          />
          <Route path="/confirmed-booking" element={<ConfirmedBooking booking={booking} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<div />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
