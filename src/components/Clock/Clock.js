import React, { useState, useEffect } from 'react';

import css from './Clock.module.css';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Оновлювати кожну хвилину

    return () => clearInterval(timer);
  }, []);

  return <div className={css.cl}>{time.toLocaleTimeString()}</div>;
};
