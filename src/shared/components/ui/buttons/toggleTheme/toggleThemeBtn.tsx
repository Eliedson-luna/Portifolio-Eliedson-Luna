'use client'

import { useTheme } from "@/context/themeContext";
import { ReactNode, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import './style.css'

export default function ToggleTheme() {
    return (
        <div className="flex place-self-center transition-all hover:cursor-pointer">
            <ToggleButton />
        </div>
    )
}

const ToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    const [spining, setSpining] = useState<boolean>(false);

    function changeTheme() {
        setSpining(true);
        toggleTheme();

        setTimeout(() => {
            setSpining(false)
        }, 1000);
    }

    return (
        <button
            onClick={changeTheme}
            className={
                spining ?
                    "btn-theme-style *:animate-[spin_1s_linear] *:hover:scale-105 *:transition-all"
                    :
                    "btn-theme-style *:hover:scale-105 *:transition-transform"
            }
        >

            <FaSun className={theme == "light" ? "text-icon" : "hide"} />
            <FaMoon className={theme == "dark" ? "text-icon" : "hide"} />
        </button>
    )
}