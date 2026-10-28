import { useEffect, useState } from "react";
import './ThemeToggle.css'

// קורא את המצב ההתחלתי: בחירה שמורה, אחרת לפי העדפת המערכת
function getInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme);

    // כל שינוי במצב מחיל את התכונה על <html> ושומר אותה לפעם הבאה
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const isDark = theme === "dark";

    return (
        <button
            className="theme-toggle"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-pressed={isDark}
            aria-label={isDark ? "מעבר למצב בהיר" : "מעבר למצב כהה"}
            title={isDark ? "מעבר למצב בהיר" : "מעבר למצב כהה"}
        >
            {isDark ? "☀️ מצב בהיר" : "🌙 מצב כהה"}
        </button>
    )
}

export default ThemeToggle
