'use client';
import { createContext, useState, useContext } from "react";
import { arrayCardObjects } from "./array-card-objects";
import { filterByTypedWord } from "@/app/filter";

const StateContext = createContext();

export function StateProvider({ children }) {
    const [theme, setTheme] = useState(false);
    const [allbooks, setBooks] = useState(arrayCardObjects);

    const toggleTheme = () => {
        setTheme(!theme);
    };
    
    const toggleBooks = (typedWord) => {
        const filteredBooks = filterByTypedWord(arrayCardObjects, typedWord);
        setBooks(filteredBooks);
    }
    return (
        <StateContext.Provider value={{ theme, toggleTheme, allbooks, toggleBooks, }}>
            {children}
        </StateContext.Provider>
    )
}
export function UseState() {
    const context = useContext(StateContext);
    if (!context) {
       
    }
    return context;
}