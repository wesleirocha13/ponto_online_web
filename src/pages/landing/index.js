import {Link} from 'react-router-dom';
import './style.css';

function Landing() {
    return (
      <div class="container">
        <h2 class="center-align">Bem vindo ao ponto online!</h2>
        <blockquote id="block" class="">
            <h5>Aqui você poderá fazer o controle do seu ponto de forma rápida e prática.</h5>
            <h6>Clique no botão abaixo para ver sua folha de ponto.</h6>
        </blockquote>
        <div class="center-align" id="button">
            <Link to="/lancamentos" class="waves-effect waves-light btn">Ver ponto</Link>
        </div>
        
      </div>
    );
  }
  export default Landing;
  