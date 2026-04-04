'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { arrayCardObjects } from './array-card-objects';
import { filterByTypedWord } from '@/app/filter';

const StateContext = createContext();

export function StateProvider({ children }) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);
  const [allbooks, setBooks] = useState(arrayCardObjects);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const toggleBooks = (typedWord) => {
    const filteredBooks = filterByTypedWord(arrayCardObjects, typedWord);
    setBooks(filteredBooks);
  };
  return (
    <StateContext.Provider
      value={{ theme, toggleTheme, allbooks, toggleBooks }}
    >
      {children}
    </StateContext.Provider>
  );
}
export function UseState() {
  const context = useContext(StateContext);
  if (!context) {
  }
  return context;
}
