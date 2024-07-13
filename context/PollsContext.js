// context/PollsContext.js
import React, { createContext, useState } from 'react';

export const PollsContext = createContext();

export const PollsProvider = ({ children }) => {
  const [polls, setPolls] = useState([]);

  const addPoll = (poll) => {
    setPolls([...polls, poll]);
  };

  return (
    <PollsContext.Provider value={{ polls, addPoll, setPolls }}>
      {children}
    </PollsContext.Provider>
  );
};
