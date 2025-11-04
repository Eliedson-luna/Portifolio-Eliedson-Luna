import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme') as Theme | null;
            if (saved) { return saved }
            const system = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            return system;
        }
        return 'light'
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    const toggleTheme = (): void => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  return context;
}