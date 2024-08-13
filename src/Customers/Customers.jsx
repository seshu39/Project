import React, { useEffect, useRef, useState } from 'react';
import './Customers.css';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const incrementTime = (duration * 1000) / end;
      const steps = Math.ceil(end / (duration * 10)); 
      const timer = setInterval(() => {
        start += steps;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return <span ref={observerRef}>{count.toLocaleString()}</span>;
};

const Customers = () => {
  return (
    <div className="customers-container">
      <div className="customer-stats">
        <div className="stat">
          <h2>
            <Counter end={172000} duration={10} />
          </h2>
          <p>Total Users</p>
        </div>
        <div className="state">
          <h2>
            <Counter end={45} duration={2} />
          </h2>
          <p>Star Rating</p>
        </div>
        <div className="stati">
          <h2>
            <Counter end={250} duration={2} />
          </h2>
          <p>Cover Letter & Resume Templates</p>
        </div>
      </div>
     
    </div>
  );
};

export default Customers;