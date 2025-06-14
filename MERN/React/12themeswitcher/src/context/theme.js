import { createContext,useContext } from "react";
export const ThemeContext = createContext({
    thememode   : "light",
    darktheme   : ()=>{}, // Function to set dark theme
    lighttheme  : ()=>{}, // Function to set light theme
});
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}