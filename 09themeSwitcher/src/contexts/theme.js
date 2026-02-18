import React, { createContext, useContext} from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {

    },
    lightMode: () => {

    }
})

export const ThemeProvider = ThemeContext.Provider

export default function useState() {
    return useContext(ThemeContext)
}