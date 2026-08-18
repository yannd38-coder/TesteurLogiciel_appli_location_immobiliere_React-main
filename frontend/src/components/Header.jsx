import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">A Propos</NavLink>
            </nav>
        </header>
    );
}