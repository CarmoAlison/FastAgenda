import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Mail from '@mui/icons-material/MailOutline';
import Telefone from '@mui/icons-material/LocalPhone';
import './Footer.css';
import LogoP from '../logoPrin.png';

export default function Footer(){
    return(
        <div class="Footer">
            <div class="Footer1">
                <div class="LogoFooter">
                <img src={LogoP} className="footer-logo" alt="logo" />
                </div>
                <div class="LinksFooter">
                    <h2>Escolha um setor</h2>
                    <hr />
                    <ul>
                        <li>Home</li>
                        <li>Setor Médico</li>
                        <li>Setor Esportivo</li>
                        <li>Setor Alimentício</li>
                        <li>Setor Educacional</li>
                    </ul>
                </div>
                <div class="IconesFooter">
                    <h2>Entre em Contato:</h2>
                    <hr />
                    <div className='Icones'>
                    <div><Instagram /></div>
                    <div><WhatsApp /></div>
                    <div><Mail /></div>
                    <div><Telefone /></div>
                    </div>
                </div>
            </div>
            <div class="Footer2">
            Copyright © 2024 | AFagende
            </div>
        </div>
    );
}