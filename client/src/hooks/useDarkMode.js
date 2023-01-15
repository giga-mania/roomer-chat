import {useState, useEffect} from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");

        if (localTheme) {
            setTheme(localTheme);
        } else {
            window.localStorage.setItem("theme", "light");
        }
    });

    return [theme, toggleTheme];
};


export default useDarkMode