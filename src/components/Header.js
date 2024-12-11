import './Header.css';
import Perfil from './perfil.png'
import LogoP from '../logoPrin.png';
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import XIcon from '@mui/icons-material/X'
// import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Header({ Logo, menu }) {

    const { session, items } = useContext(CartContext);

    // const modal = useRef();

    const cartQuantity = items.length;
    return (
        <header class="header">
            <img src={LogoP} className="header-logo" alt="logo" />
            <div id="main-title">
                {/* <img src="logo.png" alt="Elegant model" /> */}
                {session && (
                    <Link to="/auth" className="link_auth">
                        <h3>Welcome, {session.user.user_metadata.first_name} {session.user.user_metadata.last_name}</h3>
                    </Link>
                )}
            </div>
            <div class="MenuInf">
                <nav className="header-links">
                    {menu.map((item) => <a href={"/" + item.toLowerCase()}>{item}</a>)} 
                </nav>
            </div>
            <div className="perfil">

            </div>

        </header>

    );
}