import { useEffect, useState } from "react"
import "./ThemeToggle.css"

export default function ThemeToggle(){
    const [theme, switchTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        if(theme == "dark"){
            document.documentElement.setAttribute("data-theme", "dark")
        }
        else {
            document.documentElement.removeAttribute("data-theme")
        }
    })
    function onClick(){
        switchTheme(theme == "dark" ? "light" : "dark")
    }

    return <div><button onClick={onClick}>Change theme</button></div>
}
