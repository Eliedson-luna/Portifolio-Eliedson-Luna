'use client'

import { ThemeProvider, useTheme } from "@/context/themeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ToggleTheme() {
    return (
        <ThemeProvider>
            <div className="flex place-self-center mr-10 transition-all hover:cursor-pointer">
                <ToggleButton />
            </div>
        </ThemeProvider>
    )
}

const ToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    if (theme === undefined) return null;

    return (
        <>
            {theme == 'light' ? <FaSun onClick={toggleTheme} className="text-text hover:text-yellow-200" /> : <FaMoon onClick={toggleTheme} className="text-text hover:text-blue-200" />}
        </>
    )
}