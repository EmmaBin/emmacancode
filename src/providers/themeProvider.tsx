import React, { useState, useEffect, FC, ReactNode } from "react";
import { ThemeContext } from "../context/ThemeContext";


interface ThemeProviderProps {
    children: ReactNode;
  }

  
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }): JSX.Element => {
    const [theme, setTheme] = useState<"light" | "dark">(
        localStorage.getItem("ui.theme") as "light" | "dark" || "light"
    );

    const toggleTheme = (): void => {
        const val = theme === "light" ? "dark" : "light";
        setTheme(val)
        localStorage.setItem("ui.theme", val);
        document.body.classList.toggle("dark");
    };
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}