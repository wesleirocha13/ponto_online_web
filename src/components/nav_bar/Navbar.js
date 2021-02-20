import {Link} from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav>
            <div id="nav" class="nav-wrapper teal lighten-2">
                <Link to="/" class="brand-logo">Ponto Online</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/lancamentos" >Histórico de ponto</Link></li>
                    <li><Link to="registrar">Registrar ponto</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  