import React, { useState } from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>Welcome to Little Lemon Mediterranean Restaurant</h2>
      <p>
        Little Lemon is a family-owned Mediterranean restaurant that focuses on traditional recipes with a
        modern twist. We believe that food should be enjoyed and shared with loved ones, and we strive to
        provide a warm and inviting atmosphere for our guests.
      </p>
      <p>
        Our menu features a variety of Mediterranean dishes, including Greek salads, falafel plates, lamb
        chops, and lemon desserts. We use fresh, locally-sourced ingredients whenever possible and prepare all
        of our dishes with care and attention to detail.
      </p>
      <p>
        Whether you're in the mood for a quick bite or a full meal, we have something for everyone. We also
        offer catering services for parties and events, so you can share the Little Lemon experience with your
        friends and family.
      </p>
      <p>Come visit us today and taste the flavors of the Mediterranean!</p>
    </div>
  );
};

export default About;
