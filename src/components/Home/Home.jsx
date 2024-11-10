import React, { useState, useEffect, useMemo } from 'react';
import "./Home.css";

export default function Home() {
  const [greeting, setGreeting] = useState('');
  const [randomPhrase, setRandomPhrase] = useState('');

  // Memoize the phrases array to prevent unnecessary re-renders
  const phrases = useMemo(() => [
    "Do you feel hungry?",
    "Are you tired?",
    "It's time to cook!",
    "What's your next recipe adventure?",
    "Feeling creative in the kitchen?",
    "Discover delicious flavors!",
  ], []);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    // Select a random phrase when the component mounts
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  }, [phrases]);

  return (
    <div className="home" id='home'>
      <p className="greeting">{greeting}</p>
      <p className="user">Taylor</p>
      <h2 className="randomPhrase">{randomPhrase}</h2> 
    </div>
  );
}
