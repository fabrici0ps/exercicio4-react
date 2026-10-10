import { Rocket } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href="/"><Rocket /></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'contact'}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={'about'}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;