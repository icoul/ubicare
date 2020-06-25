import React, {useState, useEffect} from 'react';
import Moment from 'moment';
import { FiClock } from 'react-icons/fi';

import './Clock.css';

const Clock = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(Moment().format('YYYY-MM-DD (ddd) h:mm:ss'));
    }, 250);
    
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="headerClock">
      <div>
        <FiClock />
        <div className="clockText">{message}</div>
      </div>
    </div>
  )
}

export default Clock;