import './Header.css';
import Perfil from './perfil.png';
import LogoP from '../logoPrin.png';
import { CartContext } from "../store/shopping-cart-context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ Logo, menu }) {
    const { session, items } = useContext(CartContext);
    const cartQuantity = items.length;

    // Estado para controlar a visibilidade do menu no mobile
    const [menuOpen, setMenuOpen] = useState(false);

    // Função para alternar o menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <img src={LogoP} className="header-logo" alt="logo" />

            <div className="MenuInf">
                {/* Ícone do menu hamburguer */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <nav className={`header-links ${menuOpen ? 'active' : ''}`}>
                <Link to="/home" className="menu-item">Home</Link>
                <Link to="/setor_medico" className="menu-item">Setor Médico</Link>
                <Link to="/setor_esporte" className="menu-item">Setor Esportivo</Link>
                <Link to="/setor_alimenticio" className="menu-item">Setor Alimentício</Link>
            </nav>

            <div className="perfil">
                {/* Adicione aqui o ícone de perfil ou outras funcionalidades */}
            </div>
        </header>
    );
}
