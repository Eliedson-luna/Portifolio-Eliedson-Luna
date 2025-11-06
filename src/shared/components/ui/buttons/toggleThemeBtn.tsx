'use client'

import { ThemeProvider, useTheme } from "@/context/themeContext";
import { ReactNode, useState } from "react";
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
    const [icon, setIcon] = useState<ReactNode>((theme === 'light' ? <FaSun className="hover:text-primary" /> : <FaMoon className="hover:text-primary" />))

    function changeTheme() {
        setIcon((theme === 'dark' ? <FaSun className="hover:text-primary" /> : <FaMoon className="hover:text-primary" />));
        toggleTheme();
    }

    return (
        <button
            onClick={changeTheme}
            className="
                mr-10
                rounded-lg
                outline-0
                border-0
                bg-bg 
                text-text
                hover:cursor-pointer
                hover:scale-110
            "
        >
            {icon}
        </button>
    )
}