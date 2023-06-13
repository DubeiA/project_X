import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import css from './Clock.module.css';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <MediaQuery minWidth={769}>
        <div className={css.cl}>{time.toLocaleTimeString()}</div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className={css.cl_tel}>{time.toLocaleTimeString()}</div>
      </MediaQuery>
    </div>
  );
};
