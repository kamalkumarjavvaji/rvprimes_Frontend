import React from 'react';
import './FeaturedIn.css';
import economicTimesImg from '../../assets/featured/economic-times.svg';
import moneycontrolImg from '../../assets/featured/moneycontrol.svg';
import livemintImg from '../../assets/featured/livemint.svg';
import businessTodayImg from '../../assets/featured/business-today.svg';
import entrepreneurImg from '../../assets/featured/entrepreneur.svg';

const outlets = [
  { name: 'Economic Times', image: economicTimesImg },
  { name: 'Moneycontrol', image: moneycontrolImg },
  { name: 'LiveMint', image: livemintImg },
  { name: 'Business Today', image: businessTodayImg },
  { name: 'Entrepreneur', image: entrepreneurImg },
];

// The list is rendered twice so the scroll loops without a visible jump.
const loop = [...outlets, ...outlets];

export default function FeaturedIn() {
  return (
    <div className="featured-in" role="region" aria-label="As featured in">
      <div className="featured-in-label">As Featured In</div>
      <div className="featured-in-viewport">
        <ul className="featured-in-track">
          {loop.map((outlet, i) => (
            <li
              className="featured-card"
              key={`${outlet.name}-${i}`}
              aria-hidden={i >= outlets.length ? 'true' : undefined}
            >
              <img src={outlet.image} alt="" loading="lazy" decoding="async" />
              <span className="featured-card-name">{outlet.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
