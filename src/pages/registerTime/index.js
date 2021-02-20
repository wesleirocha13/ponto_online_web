import './style.css';
import {Link} from 'react-router-dom';

function RegisterTime() {
  return (
    <div class="container">
      <h2 class="center-align">Lançar ponto</h2>
      <div id="registerBlock">
        <form id="register-time">
          <fieldset id="fildset">
            <legend><h6>Dados:</h6></legend>
            <div class="row">
              <div class="input-field col s6">
                <input id="date" type="date" class="validate"/>
                <label htmlfor="date">Data:</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="entrada" type="text" class="validate"/>
                <label htmlfor="entrada">Entrada:</label>
              </div>
              <div class="input-field col s6">
                <input id="saida" type="text" class="validate"/>
                <label htmlfor="saida">Saída:</label>
              </div>
            </div>
            <div class="center-align" id="submitButton">
              <Link to="/lancamentos" id="cancel" class="waves-effect waves-light btn red">Cancelar</Link>
              <a class="waves-effect waves-light btn">Enviar</a>
            </div>
            
          </fieldset>
        </form>
      </div>
    </div>
  );
}
export default RegisterTime;
