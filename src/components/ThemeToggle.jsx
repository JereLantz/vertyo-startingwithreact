import { useEffect, useState } from "react"
import "./ThemeToggle.css"

export default function ThemeToggle(){
    const [theme, switchTheme] = useState()

    function onClick(){
        if(!document.documentElement.getAttribute("data-theme")){
            switchTheme(document.documentElement.setAttribute("data-theme", "dark"))
        }
        else{
            switchTheme(document.documentElement.removeAttribute("data-theme"))
        }
    }

    return <div><button onClick={onClick}>Change theme</button></div>
}
