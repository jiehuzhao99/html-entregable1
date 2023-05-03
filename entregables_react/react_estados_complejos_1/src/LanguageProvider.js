import { createContext } from "react";

// hooks
import { useState } from "react";
import { useContext } from "react";

// create language context
const LanguageContext = createContext();

// pass language state context to children
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");
    
    return (
        // pass language state and function to set state to children
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}
// use language context
export function useLanguageContext() {
    return useContext(LanguageContext);
}