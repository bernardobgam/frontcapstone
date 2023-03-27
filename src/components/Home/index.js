//create react component
import React from 'react';
import Logo from 'assets/Logo.svg';
import MarioAndAdrian from 'assets/marioandadrian.jpg';
import restauranfood from 'assets/restauranfood.jpg';
import greeksalad from 'assets/greek salad.jpg';
import lemondessert from 'assets/lemon dessert.jpg';
import bruschetta from 'assets/bruschetta.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const specials = [
  {
    title: 'Greek Salad',
    price: 12.99,
    img: greeksalad,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
  },
  {
    title: 'Bruchetta',
    img: bruschetta,
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    title: 'Lemon Dessert',
    price: 5.0,
    img: lemondessert,
    description:
      "This comes straight from grandma's recipie book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const testimonials = [
  { name: 'Peter Meter', comment: "Best Greek salad I've ever had!", stars: 5 },
  { name: 'Dominic Picnic', comment: 'A very pleasant experience to enjoy with the family...', stars: 5 },
  { name: 'Rob Bob', comment: 'I love their takeaway service and speed!', stars: 5 },
];

const Main = () => {
  let navigate = useNavigate();

  function displayStarRating(stars) {
    return '⭐⭐⭐⭐⭐'.substring(0, stars);
  }

  return (
    <main className="Main">
      <section className="hero section-padding">
        <div className="herodiv">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focus on traditional recipes served with a modern
            twist.
          </p>
          <button onClick={() => navigate('/booking')} aria-label="On Click">
            Reserve a Table
          </button>
        </div>
        <div className="herodiv">
          <img className="hero-img" src={restauranfood} alt="Food" />
        </div>
      </section>
      <section className="specials section-padding">
        <div class="flex">
          <h2>Specials</h2>
          <button onClick={() => navigate('/menu')} aria-label="On Click">
            Online Menu
          </button>
        </div>
        <div className="align-stretch specials-container flex">
          {specials.map((special, index) => (
            <div className="special" key={index}>
              <img src={special.img} alt={special.title} />
              <div className="special-inner">
                <div class="flex">
                  <h3>{special.title}</h3>
                  <b>${special.price}</b>
                </div>
                <p>{special.description}</p>
                <b>Order a delivery</b>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="specials section-padding">
        <h2>Testimonials</h2>
        <div className="specials-container flex">
          {testimonials.map((special, index) => (
            <div className="testimonial" key={index}>
              <h3>{special.name}</h3>
              <p>{special.comment}</p>
              <p>{displayStarRating(special.stars)}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="specials section-padding">
        <div>
          <h2>About</h2>
          <h3>Little Lemon</h3>
          <h5>Chicago</h5>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant that focuses on traditional recipes with a
            modern twist. We believe that food should be enjoyed and shared with loved ones, and we strive to
            provide a warm and inviting atmosphere for our guests.
          </p>
          <p>
            Our menu features a variety of Mediterranean dishes, including Greek salads, falafel plates, lamb
            chops, and lemon desserts. We use fresh, locally-sourced ingredients whenever possible and prepare
            all of our dishes with care and attention to detail.
          </p>
        </div>
        <div className="about-images">
          <img className="about-img-1" src={MarioAndAdrian} alt="Mario and Adrian" />
          <img className="about-img-2" src={restauranfood} alt="Restaurant Food" />
        </div>
      </section>
    </main>
  );
};

export default Main;
